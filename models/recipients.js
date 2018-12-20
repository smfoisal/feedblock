const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; // same

const recipientSchema = new Schema ({
    email: String,
    reponded: { type: Boolean, default: false }
});

module.exports = recipientSchema;