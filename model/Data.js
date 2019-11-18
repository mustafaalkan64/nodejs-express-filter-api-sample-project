const mongoose = require('mongoose');

const schemaModel = mongoose.Schema({
    _id: {
        type: String
    },
    key: {
        type: String
    },
    createdAt: {
        type: Date
    },
    counts: {
        type: [Number]
    },
    value: {
        type: String
    }
});

const Data = mongoose.model('record', schemaModel);
module.exports = Data;