'use strict'

const asyncHandler = require('express-async-handler')
const express = require('express')

const mongoMiddleware = require('./mongo')

function createApiRouter() {
    const router = express.Router()
    router.use(asyncHandler(mongoMiddleware))
    router.get('/getLanguages', asyncHandler(getLanguages))
    router.get('/getSkills/:from/:to', asyncHandler(getSkills))
    router.get('/getWords/:from/:to', asyncHandler(getWords))
    return router
}

async function getLanguages(req, res, next) {
    const langs = await req.mongo
        .db('langquiz')
        .collection('languages')
        .find({})
        .toArray()
    res.json(langs)
    console.log(`found ${langs.length} langs`)
}

async function getSkills(req, res, next) {
    const {from, to} = req.params
    const skills = await req.mongo
        .db('langquiz')
        .collection('skills')
        .find({from, to})
        .toArray()
    res.json(skills)
    console.log(`found ${skills.length} skills for ${from}/${to}`)
}

async function getWords(req, res, next) {
    const {from, to} = req.params
    const words = await req.mongo
        .db('langquiz')
        .collection('words2')
        .find({from, to})
        .toArray()
    res.json(words)
    console.log(`found ${words.length} words for ${from}/${to}`)
}

module.exports = createApiRouter
