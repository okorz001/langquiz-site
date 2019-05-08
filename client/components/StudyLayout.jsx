import React from 'react'
import {connect} from 'react-redux'

import {loadSkills, loadWords, setCurrentCourse} from '../actions'
import {getRoute} from '../selectors'

// TODO: this is not really layout any more
export function StudyLayout({route, setCurrentCourse, loadSkills, loadWords, children}) {
    const {learning, from} = route.params
    // TODO: 404 for bad course
    setCurrentCourse(learning, from)
    loadSkills(learning, from)
    loadWords(learning, from)

    return (
        <div>
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
