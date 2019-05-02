import {save} from './persistence'
import {getCurrentCourse, getSkills, getWords} from './selectors'

export function setCurrentCourse(learning, from) {
    return (dispatch, getState) => {
        const state = getState()
        const currentCourse = getCurrentCourse(state)
        if (currentCourse.learning == learning && currentCourse.from == from) {
            // course is already set
            return
        }
        const course = {learning, from}
        save('currentCourse', course)
        dispatch({
            type: 'SET_CURRENT_COURSE',
            payload: course,
        })
    }
}

export function loadSkills(learning, from) {
    const key = `${learning},${from}`
    return (dispatch, getState) => {
        const state = getState()
        const skills = getSkills(state)
        if (skills[key]) {
            // already loaded
            return
        }
        fetch(`/api/getSkills/${learning}/${from}`)
            .then(res => res.json())
            .then(skills => dispatch({
                type: 'LOAD_SKILLS',
                payload: {learning, from, skills},
            }))
    }
}

export function loadWords(learning, from) {
    const key = `${learning},${from}`
    return (dispatch, getState) => {
        const state = getState()
        const words = getSkills(state)
        if (words[key]) {
            // already loaded
            return
        }
        fetch(`/api/getWords/${learning}/${from}`)
            .then(res => res.json())
            .then(words => dispatch({
                type: 'LOAD_WORDS',
                payload: {learning, from, words},
            }))
    }
}
