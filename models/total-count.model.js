const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const totalSchema = new Schema({
    totalPosiive : { type: Number, required: true },
    totalRecovered : { type: Number, required: true },
    totalDeceased : { type: Number, required: true }
}, {
    timestamps: true,
});

const Total = mongoose.model('TotalCases', totalSchema);

module.exports = Total;