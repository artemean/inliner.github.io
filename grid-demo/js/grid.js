var gridApp = gridApp || {};

gridApp.initGrid = function (){
    var run = function(){
        var grid = $("#grid"),
            inverstorId = document.getElementById("investorId").value,
            inverstorType = document.getElementById("investorType").value,
            inverstorName = document.getElementById("investorName").value,
            gridData,
            columnsSet;
        //columnsSet = JSON.parse(localStorage["kendo-grid-options"]) || null;

        $(window).resize(function () {
            grid.data("kendoGrid").resize();
        });

        if ( localStorage["kendo-grid-options"] ){
            columnsSet = JSON.parse(localStorage["kendo-grid-options"])
        }


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
                    //read: "../../web.api/InvestorHistory/" + inverstorId + '?investorType=' + inverstorType,
                    read: "data/data500.json",
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
            //dataBound: onDataBound,
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
            columns: columnsSet || gridApp.configs.columnSettings.columns,
            //columns: columnsSet
            //filterMenuInit: onFilterMenuInit
            columnMenuInit: onFilterMenuInit
        });

        gridData = grid.data("kendoGrid");

        //function onDataBound(){
        //    showColumnsSelector(".main-grid .k-grid-toolbar", "showColumns");
        //}
        //
        //function showColumnsSelector(selector, buttonId){
        //    if( !$('#' + buttonId).length ) {
        //        var button = '<button class="k-button right" id="' + buttonId + '">Columns</button>';
        //        var columnTitles = [], columnFields = [], columnHidden = [], columnsListDataSource = [], i;
        //
        //        for (i = 0; i < gridData.columns.length; i++) {
        //            columnTitles.push(gridData.columns[i].title);
        //            columnFields.push(gridData.columns[i].field);
        //            columnHidden.push(gridData.columns[i].hidden);
        //        }
        //
        //        for (i = 0; i < columnTitles.length; i++) {
        //            columnsListDataSource.push({
        //                colTitle: columnTitles[i],
        //                field: columnFields[i],
        //                hidden: columnHidden[i]
        //            });
        //        }
        //
        //        $(selector).append(button);
        //
        //        $("#columns-list").kendoWindow({
        //            visible: false,
        //            minWidth: 250,
        //            modal: true,
        //            title: "Select columns to display"
        //        }).data("kendoWindow");
        //
        //        $("#columns-list-container").kendoListView({
        //            dataSource: {
        //                data: columnsListDataSource
        //            },
        //            template: "<div class='list-item'><label><input type='checkbox' # if (!hidden) { # checked # } # class='item-checkbox' data-field='#:field#' />#:colTitle#</label></div>"
        //        });
        //
        //        $("#" + buttonId).click(function () {
        //            var saveWin = $("#columns-list").data("kendoWindow");
        //            saveWin.center().open();
        //        });
        //
        //        $(".item-checkbox").on("click", function () {
        //            var th = $(this);
        //            var asd = th.data("field");
        //            console.log(asd);
        //            if (!th.prop('checked')) {
        //                gridData.hideColumn(asd);
        //            } else {
        //                gridData.showColumn(asd);
        //            }
        //
        //        });
        //    }
        //}

        function onFilterMenuInit(e) {
            if (e.field == "productType") {
                //console.log(e.container.find(".k-filter-item"));
                //console.log(e.container.find(".k-animation-container"));
                //var el = e.container.find(".k-filter-item").css({"width": "200px", "color": "#333"}).addClass("qweasdzxc");
                initCheckboxFilter.call(this, e);
            }
        }

        function initCheckboxFilter(e) {

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

        function removeFiltersForField(expression, field) {
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

        function uniqueForField(data, field) {
            var i, productTypes = [], result = [], uniqueProductTypes = [], temp;

            for( i = 0; i < data.length; i++ ){
                if (data[i][field] !== null){productTypes.push(data[i][field]);}

            }

            for(i = 0; i < productTypes.length; i++){
                var sep = productTypes[i].split(', ');
                uniqueProductTypes = uniqueProductTypes.concat(sep);
            }

            uniqueProductTypes.sort();

            for(i = uniqueProductTypes.length - 1; i > 0; i--) {
                if(uniqueProductTypes[i] == uniqueProductTypes[i - 1]) {

                    uniqueProductTypes.splice(i, 1);
                }
            }

            for(i = 0; i < uniqueProductTypes.length; i++){
                result.push({productType: uniqueProductTypes[i]});
            }
            return result;
        }



        //$("#save").click(function (event) {
        //    event.preventDefault();
        //    localStorage["kendo-grid-options"] = kendo.stringify(gridData.getOptions().columns);
        //});
        //
        //$("#load").click(function (event) {
        //    event.preventDefault();
        //    columnsSet = JSON.parse(localStorage["kendo-grid-options"]);
        //    var options = gridData.getOptions();
        //    options.columns = columnsSet;
        //    if (options) {
        //        gridData.setOptions(options);
        //    }
        //});
        //
        //$("#loadDefault").click(function (event) {
        //    event.preventDefault();
        //    //var columnsSettings = JSON.parse(localStorage["kendo-grid-options"]);
        //    var options = gridData.getOptions();
        //    options.columns = gridApp.configs.columnSettings.columns;
        //    if (options) {
        //        gridData.setOptions(options);
        //    }
        //});

        $("#save").click(function () {
            $.ajax( { url: "https://api.mlab.com/api/1/databases/userlayout/collections/defaultLayout?apiKey=C96sHyGy2r5sSf-ibDakmsV5ypO-ea1Y",
                data: JSON.stringify( { "$set" : { "columns" : gridData.getOptions().columns } } ),
                type: "PUT",
                contentType: "application/json"
            }).done(function(data){
                console.log(data);
            });

        });

        $("#load").click(function () {
            $.ajax({
                url: 'https://api.mlab.com/api/1/databases/userlayout/collections/defaultLayout?apiKey=C96sHyGy2r5sSf-ibDakmsV5ypO-ea1Y',
                type: 'GET',
                dataType: 'json'
        }).done(function(data){
                columnsSet = data[0].columns;
                var options = gridData.getOptions();
                options.columns = columnsSet;
                if (options) {
                    gridData.setOptions(options);
                }
            });
        });

        $("#loadDefault").click(function () {
            var options = gridData.getOptions();
            options.columns = gridApp.configs.columnSettings.columns;
            if (options) {
                gridData.setOptions(options);
            }
        });






        //$("#window").kendoWindow({
        //    width: 500,
        //    visible: false,
        //    modal: true,
        //    title: "Edit user settings"
        //}).data("kendoWindow");
        //
        //$("#save-modal").kendoWindow({
        //    visible: false,
        //    modal: true,
        //    title: "Save to Allocation layout"
        //}).data("kendoWindow");
        //
        //$("#revert-modal").kendoWindow({
        //    visible: false,
        //    modal: true,
        //    title: "Revert Allocation layout"
        //}).data("kendoWindow");
        //
        //$("#openButton").click(function(){
        //    var win = $("#window").data("kendoWindow");
        //
        //    $("#listView").kendoListView({
        //        dataSource: [
        //            { name: "Allocation" },
        //            { name: "Indication" }
        //        ],
        //        template: "<div>#:name#</div>",
        //        selectable: "single"
        //    });
        //
        //    win.center().open();
        //});
        //
        //$("#save-settings").click(function(){
        //    var saveWin = $("#save-modal").data("kendoWindow");
        //    saveWin.center().open();
        //});
        //
        //$("#revert-settings").click(function(){
        //    var revertWin = $("#revert-modal").data("kendoWindow");
        //    revertWin.center().open();
        //});
    };
    return {
        run: run
    }
};

$(document).ready(function() {

    gridApp.initGrid().run();

    //$.getJSON( "https://api.mlab.com/api/1/databases/userlayout/collections/defaultLayout?apiKey=C96sHyGy2r5sSf-ibDakmsV5ypO-ea1Y").done(function(data){
    //    console.log(data);
    //});

});