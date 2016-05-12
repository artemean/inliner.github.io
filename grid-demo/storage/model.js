var mongoose = require('mongoose');

var LayoutSchema = new mongoose.Schema({
    allocationPercentColumnTitle: String,
    pricingDateColumnTitle: String,
    columns: Array
}, {collection: 'defaultLayout'});

module.exports = mongoose.model('Layout', LayoutSchema);