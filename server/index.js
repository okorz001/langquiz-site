'use strict'

const express = require('express')

const createApiRouter = require('./api')

const PORT = process.env.PORT || 8080

const app = express()
app.use('/api', createApiRouter())
app.use(express.static('assets'))
app.use(express.static('build'))

app.listen(PORT, err => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Listening on port ${PORT}`)
})
