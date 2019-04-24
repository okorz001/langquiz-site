'use strict'

const fs = require('fs')
const {MongoClient} = require('mongodb')
const {promisify} = require('util')

const DB_CREDS_PATH = 'secrets/db.json'

const readFile = promisify(fs.readFile)

// MongoClient has a connection pool
let mongo = null

async function getMongo() {
    if (!mongo) {
        mongo = await createMongo()
    }
    return mongo
}

async function createMongo() {
    const {url, user, password} = await getMongoCreds()
    const mongo = new MongoClient(url, {
        useNewUrlParser: true,
        auth: {user, password},
    })
    console.log(`Connecting to ${url}`)
    await mongo.connect()
    return mongo
}

async function getMongoCreds() {
    try {
        return JSON.parse(await readFile(DB_CREDS_PATH))
    }
    catch (err) {
        return {
            url: process.env.DB_URL,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        }
    }
}

module.exports = getMongo
