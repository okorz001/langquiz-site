import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

import {getCurrentCourse} from '../selectors'

export function Nav({currentCourse}) {
    const {learning, from} = currentCourse
    if (!learning || !from) {
        return <nav />
    }
    const params = {learning, from}
    return (
        <nav>
            <Link routeName="study.quiz" routeParams={params}>Quiz</Link>
            <Link routeName="study.history" routeParams={params}>History</Link>
            <Link routeName="study.words" routeParams={params}>Words</Link>
        </nav>
    )
}

export default connect(
    state => ({
        currentCourse: getCurrentCourse(state),
    })
)(Nav)
