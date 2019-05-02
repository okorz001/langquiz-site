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

function skills(state = {}, action) {
    if (action.type === 'LOAD_SKILLS') {
        const newState = Object.assign({}, state)
        const {learning, from, skills} = action.payload
        const key = `${learning},${from}`
        newState[key] = skills
        return newState
    }
    return state
}

function words(state = {}, action) {
    if (action.type === 'LOAD_WORDS') {
        const newState = Object.assign({}, state)
        const {learning, from, words} = action.payload
        const key = `${learning},${from}`
        newState[key] = words
        return newState
    }
    return state
}

export default combineReducers({
    router: router5Reducer,
    languages: noop,
    courses: noop,
    skills,
    words,
    currentCourse,
})
