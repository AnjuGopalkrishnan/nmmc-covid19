const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dailytotalSchema = new Schema({
    date: { type: Date, required: true },
    dailytotalPosiive : { type: Number },
    dailytotalRecovered : { type: Number },
    dailyDeceased : { type: Number }
}, {
    timestamps: true,
});

const DailyTotal = mongoose.model('dailyTotalCases', dailytotalSchema);

module.exports = DailyTotal;