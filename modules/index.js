const mongoose = require('mongoose')

mongoose.connect(process.env.MOGNO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports.Place = require('./places')