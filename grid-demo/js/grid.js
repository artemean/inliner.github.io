$(document).ready(function() {

    var grid = $("#grid"),
        inverstorId = document.getElementById("investorId").value,
        inverstorType = document.getElementById("investorType").value,
        inverstorName = document.getElementById("investorName").value,
        gridData,
        columnsSet;
        //columnsSet = JSON.parse(localStorage["kendo-grid-options"]);

    $(window).resize(function () {
        grid.data("kendoGrid").resize();
    });

    $.ajax({
        url: 'http://api.mlab.com/api/1/databases/userlayout/collections/defaultLayout?apiKey=C96sHyGy2r5sSf-ibDakmsV5ypO-ea1Y',
        type: 'GET',
        contentType: "application/json",
        success: function() { alert('hello!'); },
        error: function() { alert('boo!'); }
        //beforeSend: setHeader
    });


    function setHeader(xhr) {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    }

    //$.getJSON( "http://api.mlab.com/api/1/databases/userlayout/collections/defaultLayout?apiKey=C96sHyGy2r5sSf-ibDakmsV5ypO-ea1Y&callback=?")
    //    .fail(function() {
    //        console.log( "error" );
    //    })
    //    .done(function( data ) {
    //    columnsSet = data.columns;
    //    console.log(columnsSet);
    //
    //    grid.kendoGrid({
    //        toolbar: ["excel"],
    //        excelExport: function (e) {
    //            var sheet = e.workbook.sheets[0];
    //            var allocationPercentColumnIndex;
    //            var pricingDateColumnIndex;
    //
    //            var headerRow = sheet.rows[0];
    //
    //            for (var i = 0; i < sheet.columns.length; i++) {
    //                if (headerRow.cells[i].value === columnSettings.allocationPercentColumnTitle) {
    //                    allocationPercentColumnIndex = i;
    //                }
    //                else if (headerRow.cells[i].value === columnSettings.pricingDateColumnTitle) {
    //                    pricingDateColumnIndex = i;
    //                }
    //            }
    //
    //            for (var rowIndex = 1; rowIndex < sheet.rows.length; rowIndex++) {
    //                var row = sheet.rows[rowIndex];
    //                for (var cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
    //                    if (rowIndex % 2 === 0) {
    //                        row.cells[cellIndex].background = "#d5d5d5";
    //                    }
    //                    if (allocationPercentColumnIndex === cellIndex) {
    //                        var val = row.cells[cellIndex].value;
    //                        if (val !== undefined && val !== null) {
    //                            row.cells[cellIndex].value = val / 100;
    //                        }
    //                        row.cells[cellIndex].format = "0.00%";
    //                    }
    //                    else if (pricingDateColumnIndex === cellIndex) {
    //                        row.cells[cellIndex].format = "yyyy-MM-dd";
    //                    }
    //                }
    //            }
    //        },
    //        excel: {
    //            fileName: inverstorName + ".xlsx",
    //            filterable: true,
    //            allPages: true
    //        },
    //        dataSource: {
    //            transport: {
    //                //read: "../../web.api/InvestorHistory/" + inverstorId + '?investorType=' + inverstorType,
    //                read: "data/data500.json",
    //                type: "json"
    //            },
    //            schema: {
    //                model: {
    //                    fields: {
    //                        issue: { type: "string" },
    //                        productType: { type: "string" },
    //                        tranche: { type: "string" },
    //                        pricingDate: { type: "date" },
    //                        indication: { type: "number" },
    //                        allocation: { type: "number" },
    //                        allocationPercentage: { type: "number" },
    //                        retentionAllocation: { type: "number" },
    //                        salesPerson: { type: "string" },
    //                        region: { type: "string" }
    //                    }
    //                }
    //            },
    //            sort: [{
    //                field: "pricingDate",
    //                dir: "desc"
    //            }],
    //            pageSize: 100
    //        },
    //        scrollable: {
    //            virtual: true
    //        },
    //        sortable: true,
    //        reorderable: true,
    //        groupable: true,
    //        resizable: true,
    //        filterable: true,
    //        columnMenu: {
    //            sortable: false
    //        },
    //        //columns: columnsSet || columnSettings.columns
    //        columns: columnsSet
    //    });
    //});




    gridData = grid.data("kendoGrid");

    $("#save").click(function (event) {
        event.preventDefault();
        localStorage["kendo-grid-options"] = kendo.stringify(gridData.getOptions().columns);
        console.log(gridData.getOptions());
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
        //var columnsSettings = JSON.parse(localStorage["kendo-grid-options"]);
        var options = gridData.getOptions();
        options.columns = columnSettings.columns;
        if (options) {
            gridData.setOptions(options);
        }
    });




    $("#window").kendoWindow({
        width: 500,
        visible: false,
        modal: true,
        title: "Edit user settings"
    }).data("kendoWindow");

    $("#save-modal").kendoWindow({
        visible: false,
        modal: true,
        title: "Save to Allocation layout"
    }).data("kendoWindow");

    $("#revert-modal").kendoWindow({
        visible: false,
        modal: true,
        title: "Revert Allocation layout"
    }).data("kendoWindow");

    $("#openButton").click(function(){
        var win = $("#window").data("kendoWindow");

        $("#listView").kendoListView({
            dataSource: [
                { name: "Allocation" },
                { name: "Indication" }
            ],
            template: "<div>#:name#</div>",
            selectable: "single"
        });

        win.center().open();
    });

    $("#save-settings").click(function(){
        var saveWin = $("#save-modal").data("kendoWindow");
        saveWin.center().open();
    });

    $("#revert-settings").click(function(){
        var revertWin = $("#revert-modal").data("kendoWindow");
        revertWin.center().open();
    });






});