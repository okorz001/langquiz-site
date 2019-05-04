import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

import {loadSkills, loadWords, setCurrentCourse} from '../actions'
import {getLanguagesById, getRoute} from '../selectors'

export function StudyLayout({route, languages, setCurrentCourse, loadSkills, loadWords, children}) {
    const {learning, from} = route.params
    // TODO: 404 for bad course
    setCurrentCourse(learning, from)
    loadSkills(learning, from)
    loadWords(learning, from)

    const learningName = languages[learning].name
    const fromName = languages[from].name
    return (
        <div>
            You're learning {learningName} from {fromName}.
            <br />
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
        languages: getLanguagesById(state),
        children: ownProps.children,
    }),
    {
        loadSkills,
        loadWords,
        setCurrentCourse,
    }
)(StudyLayout)
