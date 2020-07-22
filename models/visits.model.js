const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const visitSchema = new Schema({
    hits : { type: Number, required: true }
}, {
    timestamps: true,
});

const Visits = mongoose.model('Visits', visitSchema);

module.exports = Visits;