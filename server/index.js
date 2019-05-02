'use strict'

const express = require('express')
const hbs = require('hbs')

const createApiRouter = require('./api')
const serveApp = require('./app')
const withDao = require('./dao')

const PORT = process.env.PORT || 8080

// expose JSON.stringify to handlebars to safely inject JSON for script tags
hbs.registerHelper('json', JSON.stringify)

const app = express()

// never shadow api
app.use('/api', withDao, createApiRouter())

// search for assets
app.use(express.static('assets'))
app.use(express.static('build'))

// assume client route, serve client
app.get('*', withDao, serveApp)

app.listen(PORT, err => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Listening on port ${PORT}`)
})
