import React from 'react'
import {connect} from 'react-redux'

import {loadSkills, loadWords, setCurrentCourse} from '../actions'
import {getRoute} from '../selectors'

export function RequireCourse({route, setCurrentCourse, loadSkills, loadWords}) {
    const {learning, from} = route.params
    // TODO: 404 for bad course
    setCurrentCourse(learning, from)
    loadSkills(learning, from)
    loadWords(learning, from)
    return null
}

export default connect(
    state => ({
        route: getRoute(state),
    }),
    {
        loadSkills,
        loadWords,
        setCurrentCourse,
    }
)(RequireCourse)
