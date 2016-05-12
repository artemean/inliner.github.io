$(document).ready(function() {

    var grid = $("#grid"),
        inverstorId = document.getElementById("investorId").value,
        inverstorType = document.getElementById("investorType").value,
        inverstorName = document.getElementById("investorName").value,
        gridData,
        columnsSet;
<<<<<<< HEAD
    //columnsSet = JSON.parse(localStorage["kendo-grid-options"]) || null;
=======
        //columnsSet = JSON.parse(localStorage["kendo-grid-options"]);
>>>>>>> 8cd70e64ded46c2326e4c800e1460cc7e972ed69

    $(window).resize(function () {
        grid.data("kendoGrid").resize();
    });

<<<<<<< HEAD
    if ( localStorage["kendo-grid-options"] ){
        columnsSet = JSON.parse(localStorage["kendo-grid-options"])
    }


    console.log(columnsSet);
=======
    //$.ajax({
    //    url: 'http://api.mlab.com/api/1/databases/userlayout/collections/defaultLayout?apiKey=C96sHyGy2r5sSf-ibDakmsV5ypO-ea1Y',
    //    type: 'GET',
    //    contentType: "application/json",
    //    headers: {"Access-Control-Allow-Origin": "*"},
    //    success: function() { alert('hello!'); },
    //    error: function() { alert('boo!'); }
    //    //beforeSend: setHeader
    //});


    //$.ajax( { url: "http://api.mlab.com/api/1/databases/userlayout/collections/defaultLayout?apiKey=C96sHyGy2r5sSf-ibDakmsV5ypO-ea1Y",
    //    data: JSON.stringify( { "x" : 1 } ),
    //    type: "POST",
    //    contentType: "application/json",
    //    success: function() { console.log('success'); },
    //    error: function() { console.log('error'); }
    //});


    $.getJSON( "http://localhost:3000/api/default")
        .fail(function() {
            console.log( "error" );
        })
        .done(function( data ) {

        columnsSet = data[0].columns;




    });
>>>>>>> 8cd70e64ded46c2326e4c800e1460cc7e972ed69

    grid.kendoGrid({
        toolbar: ["excel"],
        excelExport: function (e) {
            var sheet = e.workbook.sheets[0];
            var allocationPercentColumnIndex;
            var pricingDateColumnIndex;

            var headerRow = sheet.rows[0];

            for (var i = 0; i < sheet.columns.length; i++) {
                if (headerRow.cells[i].value === columnSettings.allocationPercentColumnTitle) {
                    allocationPercentColumnIndex = i;
                }
                else if (headerRow.cells[i].value === columnSettings.pricingDateColumnTitle) {
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
<<<<<<< HEAD
        columns: columnsSet || columnSettings.columns
        //columns: columnsSet
=======
        //columns: columnsSet || columnSettings.columns
        columns: columnsSet
>>>>>>> 8cd70e64ded46c2326e4c800e1460cc7e972ed69
    });

    gridData = grid.data("kendoGrid");

<<<<<<< HEAD
    //var dSource = gridData.dataSource;
    //console.log(dSource);
    //$.each(dSource.options.schema.model.fields, function (propertyName, propertyValue) {
    //    //alert(filter.field);
    //    console.log(propertyName, propertyValue);
    //});

=======
    var dSource = gridData.dataSource;
    console.log(dSource);
    $.each(dSource.options.schema.model.fields, function (propertyName, propertyValue) {
        //alert(filter.field);
        console.log(propertyName, propertyValue);
    });
>>>>>>> 8cd70e64ded46c2326e4c800e1460cc7e972ed69





<<<<<<< HEAD
=======

>>>>>>> 8cd70e64ded46c2326e4c800e1460cc7e972ed69
    $("#save").click(function (event) {
        event.preventDefault();
        localStorage["kendo-grid-options"] = kendo.stringify(gridData.getOptions().columns);
        console.log(gridData.getOptions());
    });

    $("#load").click(function (event) {
        event.preventDefault();
        columnsSet = JSON.parse(localStorage["kendo-grid-options"]);
<<<<<<< HEAD
        var options = gridData.getOptions();
        options.columns = columnsSet;
=======
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
>>>>>>> 8cd70e64ded46c2326e4c800e1460cc7e972ed69
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