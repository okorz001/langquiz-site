'use strict'

const express = require('express')

function createApiRouter() {
    const router = express.Router()
    router.get('/getLanguages', getLanguages)
    router.get('/getCourses', getCourses)
    router.get('/getSkills/:from/:to', getSkills)
    router.get('/getWords/:from/:to', getWords)
    return router
}

function getLanguages(req, res, next) {
    req.dao.getLanguages()
        .then(it => res.json(it))
        .catch(next)
}

function getCourses(req, res, next) {
    const {from} = req.query
    req.dao.getCourses(from)
        .then(it => res.json(it))
        .catch(next)
}

function getSkills(req, res, next) {
    const {from, to} = req.params
    req.dao.getSkills(from, to)
        .then(it => res.json(it))
        .catch(next)
}

function getWords(req, res, next) {
    const {from, to} = req.params
    req.dao.getWords(from, to)
        .then(it => res.json(it))
        .catch(next)
}

module.exports = createApiRouter
