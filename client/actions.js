import {getCurrentCourse} from './selectors'
import {save} from './persistence'

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
