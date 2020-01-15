const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name:{type: String, required:true},
    username: {type: String,trim:true, required: true, index:true, unique:true},
    password: {type: String, required:true},
}, { versionKey: false });

module.exports = mongoose.model('Users', UsersSchema);

