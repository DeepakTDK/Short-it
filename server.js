const express = require('express')
//init express app
const app = express()
const PORT = process.env.PORT || 5000
//listening incoming ports
app.listen(PORT, () => console.log('server started, listening port ${PORT}'))