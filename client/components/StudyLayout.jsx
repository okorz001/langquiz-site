import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

import {loadSkills, loadWords, setCurrentCourse} from '../actions'
import {getRoute} from '../selectors'

export function StudyLayout({route, setCurrentCourse, loadSkills, loadWords, children}) {
    const {learning, from} = route.params
    // TODO: 404 for bad course
    setCurrentCourse(learning, from)
    loadSkills(learning, from)
    loadWords(learning, from)

    return (
        <div>
            <Link routeName="select">Change Language</Link>
            <Link routeName="study.quiz" routeParams={route.params}>Quiz</Link>
            <Link routeName="study.history" routeParams={route.params}>History</Link>
            <Link routeName="study.words" routeParams={route.params}>Words</Link>
            <br />
            {children}
        </div>
    )
}

export default connect(
    (state, ownProps) => ({
        route: getRoute(state),
        children: ownProps.children,
    }),
    {
        loadSkills,
        loadWords,
        setCurrentCourse,
    }
)(StudyLayout)
