const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeCasesSchema = new Schema({
    date: { type: Date, required: true },
    placesCount: [{
        placeName : { type: String, required: true },
        Positive: Number,
        Recovered: Number
    }]
}, {
    timestamps: true,
});

const CaseCount = mongoose.model('dailyPlaceCaseCount', placeCasesSchema);

module.exports = CaseCount;