const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose; // same

const userSchema = new Schema ({
    googleID: String
    ,   name: String
    ,credits: { type: Number, default: 0 }
});

mongoose.model('user', userSchema);