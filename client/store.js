import {applyMiddleware, createStore} from 'redux'
import {createLogger} from 'redux-logger'
import {router5Middleware} from 'redux-router5'

import reducer from './reducers'

export default function newStore(router, initialState) {
    const mw = []
    mw.push(router5Middleware(router))

    // debugging tools last to ensure we have regular actions
    const logger = createLogger()
    mw.push(logger)

    return createStore(reducer, initialState, applyMiddleware(...mw))
}
