import {applyMiddleware, createStore} from 'redux'
import {router5Middleware} from 'redux-router5'

import reducer from './reducers'

export default function newStore(router, initialState) {
    const mw = []
    mw.push(router5Middleware(router))
    const createStoreWithMw = applyMiddleware(...mw)(createStore)
    return createStoreWithMw(reducer, initialState)
}
