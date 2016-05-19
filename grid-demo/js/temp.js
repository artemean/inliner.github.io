var gridApp = gridApp || {};

gridApp.initGrid = function () {

    var run = function () {

        var grid = $("#grid"),
            gridData,
            columnsSet,
            gridId = grid[0].id;

        $(window).resize(function () {
            grid.data("kendoGrid").resize();
        });

        if (localStorage["kendo-grid-options"]) {
            columnsSet = JSON.parse(localStorage["kendo-grid-options"])
        }

        var inverstorId = document.getElementById("investorId").value;
        var inverstorType = document.getElementById("investorType").value;
        var inverstorName = document.getElementById("investorName").value;

        grid.kendoGrid({
            toolbar: ["excel"],
            excelExport: function (e) {
                var sheet = e.workbook.sheets[0];
                var allocationPercentColumnIndex;
                var pricingDateColumnIndex;

                var headerRow = sheet.rows[0];

                for (var i = 0; i < sheet.columns.length; i++) {
                    if (headerRow.cells[i].value === gridApp.configs.allocationPercentColumnTitle) {
                        allocationPercentColumnIndex = i;
                    }
                    else if (headerRow.cells[i].value === gridApp.configs.pricingDateColumnTitle) {
                        pricingDateColumnIndex = i;
                    }
                }

                for (var rowIndex = 1; rowIndex < sheet.rows.length; rowIndex++) {
                    var row = sheet.rows[rowIndex];
                    for (var cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
                        if (rowIndex % 2 === 0) {
                            row.cells[cellIndex].background = "#d5d5d5";
                        }
                        if (allocationPercentColumnIndex === cellIndex) {
                            var val = row.cells[cellIndex].value;
                            if (val !== undefined && val !== null) {
                                row.cells[cellIndex].value = val / 100;
                            }
                            row.cells[cellIndex].format = "0.00%";
                        }
                        else if (pricingDateColumnIndex === cellIndex) {
                            row.cells[cellIndex].format = "yyyy-MM-dd";
                        }
                    }
                }
            },
            excel: {
                fileName: inverstorName + ".xlsx",
                filterable: true,
                allPages: true
            },
            dataSource: {
                transport: {
                    read: "../../web.api/InvestorHistory/" + inverstorId + '?investorType=' + inverstorType,
                    type: "json"
                },
                schema: {
                    model: {
                        fields: {
                            issue: { type: "string" },
                            productType: { type: "string" },
                            tranche: { type: "string" },
                            pricingDate: { type: "date" },
                            indication: { type: "number" },
                            allocation: { type: "number" },
                            allocationPercentage: { type: "number" },
                            retentionAllocation: { type: "number" },
                            salesPerson: { type: "string" },
                            region: { type: "string" }
                        }
                    }
                },
                sort: [{
                    field: "pricingDate",
                    dir: "desc"
                }],
                pageSize: 100
            },
            scrollable: {
                virtual: true
            },
            sortable: true,
            reorderable: true,
            groupable: true,
            resizable: true,
            filterable: true,
            columnMenu: {
                sortable: false
            },
            //columns: columnsSet || gridApp.configs.columnSettings.columns,
            columns: getCurrentLayout(),
            columnMenuInit: onFilterMenuInit//this even fires only once after a user clicks filter button ona column
        });

        function onFilterMenuInit(e) {
            if (e.field == "productType") {//Make sure that custom filter is applied to productType column only
                initCheckboxFilter.call(this, e);
            }
        }

        function initCheckboxFilter(e) {//this function is a part of custom filtering - parse unique comma separated values

            var popup = e.container.data("kendoPopup");
            var dataSource = this.dataSource;
            var field = e.field;
            var checkboxesDataSource = uniqueForField(dataSource.data(), field);

            var helpTextElement = e.container.children(":first").find(".k-filter-menu div:first");
            helpTextElement.children(":first").nextUntil(":has(.k-button)").remove();
            var element = $("<div class='checkbox-container'></div>").insertAfter(helpTextElement.children(":first")).kendoListView({
                dataSource: checkboxesDataSource,
                template: "<div><input type='checkbox' value='#:" + field + "#'/>#:" + field + "#</div>"
            });
            e.container.find("[type='submit']").click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                var filter = dataSource.filter() || { logic: "and", filters: [] };
                var fieldFilters = $.map(element.find(":checkbox:checked"), function (input) {
                    return {
                        field: field,
                        operator: "Contains",
                        value: input.value
                    };
                });
                if (fieldFilters.length) {
                    removeFiltersForField(filter, field);
                    filter.filters.push({
                        logic: "or",
                        filters: fieldFilters
                    });
                    dataSource.filter(filter);
                }
                popup.close();
            });
        }

        function removeFiltersForField(expression, field) {//this function is a part of custom filtering - parse unique comma separated values
            if (expression.filters) {
                expression.filters = $.grep(expression.filters, function (filter) {
                    removeFiltersForField(filter, field);
                    if (filter.filters) {
                        return filter.filters.length;
                    } else {
                        return filter.field != field;
                    }
                });
            }
        }

        function uniqueForField(data, field) {//this function is a part of custom filtering - parse unique comma separated values
            var i, productTypes = [], result = [], uniqueProductTypes = [], temp;

            for (i = 0; i < data.length; i++) {
                if (data[i][field] !== null) { productTypes.push(data[i][field]); }
            }

            for (i = 0; i < productTypes.length; i++) {
                var sep = productTypes[i].split(', ');
                uniqueProductTypes = uniqueProductTypes.concat(sep);
            }

            uniqueProductTypes.sort();

            for (i = uniqueProductTypes.length - 1; i > 0; i--) {
                if (uniqueProductTypes[i] == uniqueProductTypes[i - 1]) {
                    uniqueProductTypes.splice(i, 1);
                }
            }

            for (i = 0; i < uniqueProductTypes.length; i++) {
                result.push({ productType: uniqueProductTypes[i] });
            }
            return result;
        }

        var controlsSettingsConfigKey = '{0728CD62-5778-4A4D-8932-98D039C04697}';
        var csManager = new ControlsSettingsAPI.ControlsSettingsManager(controlsSettingsConfigKey);

        var getCurrentLayout = function () {
            csManager.getCurrentLayout(gridId)
        });



$("#save").click(function (event) {
    event.preventDefault();
    var layoutValue = kendo.stringify(gridData.getOptions().columns);



    csManager.AddLayoutToControl(gridId, layoutValue, '', true)
});

$("#load").click(function (event) {
    event.preventDefault();
    columnsSet = JSON.parse(localStorage["kendo-grid-options"]);
    var options = gridData.getOptions();
    options.columns = columnsSet;
    if (options) {
        gridData.setOptions(options);
    }
});

$("#loadDefault").click(function (event) {
    event.preventDefault();
    var prefedinedLayoutKey = csManager.ControlSettingsConfig.Value.controlsSettings[0].defaultPredefinedLayoutKey;
    var layoutValue = csManager.GetLayoutValueForControl(gridId, prefedinedLayoutKey);
    //var options = gridData.getOptions();
    //options.columns = gridApp.configs.columnSettings.columns;
    //if (options) {
    gridData.setOptions(JSON.parse(layoutValue));
    //}
});

}

return {
    run: run
}

};

$(document).ready(function () {

    gridApp.initGrid().run();


});