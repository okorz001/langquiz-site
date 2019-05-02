'use strict'

const getMongo = require('./mongo')

const DATABASE = 'langquiz'

function withDao(req, res, next) {
    getMongo(DATABASE)
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
            .db(DATABASE)
            .collection('languages')
            .find({})
            .toArray()
        console.log(`found ${langs.length} langs`)
        return langs
    }

    async getCourses(from) {
        let query = {}
        if (from) {
            query.from = from
        }
        const courses = await this.mongo
            .db(DATABASE)
            .collection('courses')
            .find(query)
            .toArray()
        if (from) {
            console.log(`found ${courses.length} courses for ${from}`)
        }
        else {
            console.log(`found ${courses.length} courses`)
        }
        return courses
    }

    async getSkills(from, to) {
        const skills = await this.mongo
            .db(DATABASE)
            .collection('skills')
            .find({from, to})
            .toArray()
        console.log(`found ${skills.length} skills for ${from}/${to}`)
        return skills
    }

    async getWords(from, to) {
        const words = await this.mongo
            .db(DATABASE)
            .collection('words2')
            .find({from, to})
            .toArray()
        console.log(`found ${words.length} words for ${from}/${to}`)
        return words
    }
}

module.exports = withDao
