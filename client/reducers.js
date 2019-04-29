import {combineReducers} from 'redux'
import {router5Reducer} from 'redux-router5'

function languages(state = [], action) {
    return state
}

export default combineReducers({
    router: router5Reducer,
    languages,
})
