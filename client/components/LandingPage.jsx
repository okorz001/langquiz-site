import React from 'react'
import {connect} from 'react-redux'
import {actions} from 'redux-router5'

import {getCurrentCourse} from '../selectors'

export function LandingPage({currentCourse, navigateTo}) {
    const {learning, from} = currentCourse
    if (learning && from) {
        navigateTo('study.quiz', {learning, from}, {replace: true})
    }
    else {
        navigateTo('select', {}, {replace: true})
    }
    return <div>Loading...</div>
}

export default connect(
    state => ({
        currentCourse: getCurrentCourse(state),
    }),
    {
        navigateTo: actions.navigateTo,
    }
)(LandingPage)
