import {combineReducers} from 'redux'
import {router5Reducer} from 'redux-router5'

// for immutable state bootstrapped by server
function noop(state = {}) {
    return state
}

function currentCourse(state = {}, action) {
    if (action.type === 'SET_CURRENT_COURSE') {
        return action.payload
    }
    return state
}

export default combineReducers({
    router: router5Reducer,
    languages: noop,
    courses: noop,
    currentCourse,
})
