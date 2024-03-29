const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
    title: {type: String, required: true},
    userId: {type: String, required: true},
    link: {type: String, required:true, trim:true},
    description: {type: String, required:true},
    tags: [String]
    
}, { versionKey: false });

module.exports = mongoose.model('Tools', ToolSchema);

