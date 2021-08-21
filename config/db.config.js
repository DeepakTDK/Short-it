const mongoose = require('mongoose')
//db conn string uri
const db_uri = 'mongodb+srv://Deepak:Thamandk25.@cluster0.jrbyo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//establish db conn
mongoose.connect(db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const conn = mongoose.connection

module.exports = conn
