// static strings for tree shaking
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Container.prod')
}
else {
    // TODO: react-json-tree is crashing: Cannot read property 'length' of null
    //module.exports = require('./Container.dev')
    module.exports = require('./Container.prod')
}
