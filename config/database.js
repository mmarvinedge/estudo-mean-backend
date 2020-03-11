const mongoose = require('mongoose')
const options = { useNewUrlParser: true, useUnifiedTopology: true }

module.exports = mongoose.connect('mongodb://localhost/db_finance', options)