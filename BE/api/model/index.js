const mongoose = require('mongoose')
var mongooseDelete = require('mongoose-delete')
const itemSchema = new mongoose.Schema({
    name: String,
    date: String,
    status:String    
})
itemSchema.plugin(mongooseDelete)
itemSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('student', itemSchema)