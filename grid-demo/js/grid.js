$(document).ready(function() {
    var grid = $("#grid");

    grid.kendoGrid({
        toolbar: ["excel"],
        excel: {
            fileName: "Kendo UI Grid Export.xlsx",
            //proxyURL: "//demos.telerik.com/kendo-ui/service/export",
            filterable: true
        },
        dataSource: {
//                    data: products,

            transport: {
                read: "data/data2.json",
                type: "json"
            },
            schema: {
                model: {
                    fields: {
                        Issuer: { type: "string" },
                        Tranche: { type: "string" },
                        Broker_Alpha: { type: "string" },
                        Pricing_Date: { type: "string" },
                        Transaction_Type: { type: "string" },
                        Product_Type: { type: "string" },
                        Indication: { type: "number" },
                        Allocation: { type: "number" },
                        Percent_allocation: { type: "string" },
                        Some: { type: "number" },
                    }
                }
            },
//                    group: {
//                        field: "Discontinued", aggregates: [
//                            { field: "ProductName", aggregate: "count" },
//                            { field: "UnitPrice", aggregate: "sum"},
//                            { field: "UnitsOnOrder", aggregate: "average" },
//                            { field: "UnitsInStock", aggregate: "count" }
//                        ]
//                    },
            aggregate: [ { field: "Issuer", aggregate: "count" },
                { field: "Indication", aggregate: "min" },
                { field: "Some", aggregate: "sum" }],
            pageSize: 100
        },

        height: 550,
        scrollable: {
            virtual: true
        },
        sortable: true,
        reorderable: true,
        groupable: true,
        resizable: true,
        filterable: true,
        columnMenu: true,
//                pageable: {
//                    input: true,
//                    numeric: false
//                },
        columns: [
            {
                field: "Issuer",
                title: "Issuer",
                footerTemplate: "Total Count: #=count#",
                locked: true,
                lockable: true,
                filterable: { multi: true }
                ,width: 150
            },
            {
                field: "Tranche",
                title: "Tranche",
                locked: false,
                lockable: true
                ,width: 150
            },
            {
                field: "Broker_Alpha",
                title: "Broker Alpha",
                locked: false,
                lockable: true
                ,width: 150
            },
            {
                field: "Pricing_Date",
                title: "Pricing Date",
                locked: false,
                lockable: true
                ,width: 150
            },

            {
                field: "Transaction_Type",
                title: "Transaction Type",
                locked: false,
                lockable: true
                ,width: 150
            },
            {
                field: "Product_Type",
                title: "Product Type",
                locked: false,
                lockable: true
                ,width: 150
            },
            {
                field: "Indication",
                title: "Indication",
                format: "{0:c0}",
                aggregates: ["min"],
                footerTemplate: "Min: #= kendo.toString(min, 'c') #"
                ,width: 150
            },
            {
                field: "Allocation",
                title: "Allocation",
                format: "{0:c0}"
                ,width: 150
            },
            {
                field: "Percent_allocation",
                title: "Percent allocation"
                ,width: 150
            },
            {
                field: "Some",
                title: "Some",
                format: "{0:c}",
                aggregates: ["sum"],
                footerTemplate: "Sum: #= kendo.toString(sum, 'c') #"
                ,width: 150
            }
        ]
    });

    var gridData = grid.data("kendoGrid");

    $("#save").click(function (e) {
        e.preventDefault();
        localStorage["kendo-grid-options"] = kendo.stringify(gridData.getOptions());
    });

    $("#load").click(function (e) {
        e.preventDefault();
        var options = localStorage["kendo-grid-options"];
        if (options) {
            gridData.setOptions(JSON.parse(options));
        }
    });
});