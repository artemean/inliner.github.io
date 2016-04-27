$(document).ready(function() {
    var grid = $("#grid");

    grid.kendoGrid({
        toolbar: ["excel"],
        excel: {
            fileName: "Kendo UI Grid Export.xlsx",
            proxyURL: "//demos.telerik.com/kendo-ui/service/export",
            filterable: true
        },
        dataSource: {
//                    data: products,

            transport: {
                read: "data/data5000.json",
                type: "json"
            },
            schema: {
                model: {
                    fields: {
                        Issuer: { type: "string" },
                        Product_Type: { type: "string" },
                        Tranche: { type: "string" },
                        Pricing_Date: { type: "date" },
                        Indication: { type: "number" },
                        Allocation: { type: "number" },
                        Percent_allocation: { type: "string" },
                        Hedge_Type: { type: "string" },
                        Security_Type: { type: "string" },
                        Retention_Allocation: { type: "number" },
                        Sales_Person: { type: "string" },
                        Region: { type: "string" }
                    }
                }
            },
            //        group: {
            //            field: "Product_Type", aggregates: [
            //                { field: "Indication", aggregate: "sum" },
            //                { field: "Allocation", aggregate: "sum"}
            //            ]
            //        },
            //aggregate: [ { field: "Issuer", aggregate: "count" },
            //    { field: "Indication", aggregate: "min" },
            //    { field: "Some", aggregate: "sum" }],
            sort: [{
                field: "Pricing_Date",
                dir: "desc"
            }],
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
        //columnMenu: true,
//                pageable: {
//                    input: true,
//                    numeric: false
//                },
        columns: [
            {
                field: "Issuer",
                title: "Issuer"
                //footerTemplate: "Total Count: #=count#",
                //locked: true,
                //lockable: true,
                //filterable: { multi: true }
                //,width: 150
            },
            {
                field: "Product_Type",
                title: "Product Type",
                filterable: { multi: true }
            },
            {
                field: "Tranche",
                title: "Tranche"
                //filterable: { multi: true }
                //locked: false,
                //lockable: true
                //,width: 150
            },
            {
                field: "Pricing_Date",
                title: "Pricing Date",
                format: "{0:dd/MMM/yy}",
                filterable: {
                    ui: "datetimepicker" // use Kendo UI DateTimePicker
                }
                //locked: false,
                //lockable: true
                //,width: 150
            },
            {
                field: "Indication",
                title: "Indication",
                format: "{0:c0}"
                //aggregates: ["min"],
                //footerTemplate: "Min: #= kendo.toString(min, 'c') #",
                //groupFooterTemplate: "Sum: #=sum#"
                //,width: 150
            },
            {
                field: "Allocation",
                title: "Allocation",
                format: "{0:c0}"
                //groupFooterTemplate: "Sum: #= kendo.toString(sum, 'c') #"
                //,width: 150
            },
            {
                field: "Percent_allocation",
                title: "% Allocation"
                //,width: 150
            },
            {
                field: "Hedge_Type",
                title: "Hedge Type",
                filterable: { multi: true }
            },
            {
                field: "Security_Type",
                title: "Security Type",
                filterable: { multi: true }
            },
            {
                field: "Retention_Allocation",
                title: "Retention  Allocation",
                format: "{0:c0}"
            },
            {
                field: "Sales_Person",
                title: "Sales Person"
            },
            {
                field: "Region",
                title: "Region",
                filterable: { multi: true }
            }




            //{
            //    field: "Some",
            //    title: "Some",
            //    format: "{0:c}"
            //    //aggregates: ["sum"],
            //    //footerTemplate: "Sum: #= kendo.toString(sum, 'c') #"
            //    //,width: 150
            //}
            //{
            //    field: "Transaction_Type",
            //    title: "Transaction Type"
            //},
        ]
    });

    var gridData = grid.data("kendoGrid");

    $("#save").click(function (e) {
        e.preventDefault();
        localStorage["kendo-grid-options"] = kendo.stringify(gridData.getOptions());
        console.log(gridData.getOptions());
    });

    $("#load").click(function (e) {
        e.preventDefault();
        var options = localStorage["kendo-grid-options"];
        if (options) {
            gridData.setOptions(JSON.parse(options));
        }
    });
});