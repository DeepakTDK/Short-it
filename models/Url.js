const mongoose = require('mongoose')
//create a schema
const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
})
//create model from schema and eport it
module.exports = mongoose.model('Url', URLSchema)