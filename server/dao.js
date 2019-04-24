'use strict'

const getMongo = require('./mongo')

function withDao(req, res, next) {
    getMongo()
       .then(mongo => {
           req.dao = new Dao(mongo)
           next()
       })
       .catch(next)
}

class Dao {
    constructor(mongo) {
        this.mongo = mongo
    }

    async getLanguages() {
        const langs = await this.mongo
            .db('langquiz')
            .collection('languages')
            .find({})
            .toArray()
        console.log(`found ${langs.length} langs`)
        return langs
    }

    async getSkills(from, to) {
        const skills = await this.mongo
            .db('langquiz')
            .collection('skills')
            .find({from, to})
            .toArray()
        console.log(`found ${skills.length} skills for ${from}/${to}`)
        return skills
    }

    async getWords(from, to) {
        const words = await this.mongo
            .db('langquiz')
            .collection('words2')
            .find({from, to})
            .toArray()
        console.log(`found ${words.length} words for ${from}/${to}`)
        return words
    }
}

module.exports = withDao
