var columnSettings = {
    allocationPercentColumnTitle: "% Allocation",
    pricingDateColumnTitle: "Pricing Date",
    columns: [
        {
            field: "issue",
            title: "Issue",
            filterable: {
                extra: false,
                operators: {
                    string: {
                        contains: "Contains"
                    }
                }
            }
        },
        {
            field: "productType",
            title: "Product Type",
            filterable: { multi: true }
        },
        {
            field: "tranche",
            title: "Tranche",
            filterable: {
                extra: false,
                operators: {
                    string: {
                        contains: "Contains"
                    }
                }
            }
        },
        {
            field: "pricingDate",
            title: "Pricing Date",
            format: "{0:yyyy-MM-dd}",
            filterable: {
                ui: "datepicker", // use Kendo UI DateTimePicker
                operators: {
                    date: {
                        gte: "After",
                        lte: "Before"
                    }
                }
            }
        },
        {
            field: "indication",
            title: "Indication",
            format: "{0:n}",
            filterable: {
                operators: {
                    number: {
                        gte: "Greater or equal",
                        lte: "Less or equal"
                    }
                }
            }
        },
        {
            field: "allocation",
            title: "Allocation",
            format: "{0:n}",
            filterable: {
                operators: {
                    number: {
                        gte: "Greater or equal",
                        lte: "Less or equal"
                    }
                }
            }
        },
        {
            field: "allocationPercentage",
            title: "% Allocation",
            template: function (dataItem) {
                var val = dataItem["allocationPercentage"];
                if (val !== undefined) {
                    if (val === null) {
                        return "";
                    }
                    return kendo.toString(val, "n2") + "%";
                } else {
                    return "";
                }
            },
            filterable: {
                operators: {
                    number: {
                        gte: "Greater or equal",
                        lte: "Less or equal"
                    }
                }
            }
        },
        {
            field: "retentionAllocation",
            title: "Retention  Allocation",
            format: "{0:n}",
            filterable: {
                operators: {
                    number: {
                        gte: "Greater or equal",
                        lte: "Less or equal"
                    }
                }
            }
        },
        {
            field: "salesPerson",
            title: "Sales Person",
            filterable: {
                extra: false,
                operators: {
                    string: {
                        contains: "Contains"
                    }
                }
            }
        },
        {
            field: "region",
            title: "Region",
            filterable: {
                extra: false,
                operators: {
                    string: {
                        contains: "Contains"
                    }
                }
            }
        }
    ]
};

module.exports = columnSettings;