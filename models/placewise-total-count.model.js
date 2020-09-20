const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeTotalSchema = new Schema({
    date: { type: Date, required: true },
    placewiseTotal: [{
        placeName : { type: String, required: true },
        totalPositive: Number,
        totalRecovered: Number,
        totalDeceased: Number
    }]
}, {
    timestamps: true,
});

const PlacewiseTotal = mongoose.model('placewiseTotalCases', placeTotalSchema);

module.exports = PlacewiseTotal;