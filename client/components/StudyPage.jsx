import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

import {loadSkills, loadWords, setCurrentCourse} from '../actions'
import {getLanguagesById, getRoute} from '../selectors'

export function StudyPage({route, languages, setCurrentCourse, loadSkills, loadWords}) {
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
        </div>
    )
}

export default connect(
    state => ({
        route: getRoute(state),
        languages: getLanguagesById(state),
    }),
    {
        loadSkills,
        loadWords,
        setCurrentCourse,
    }
)(StudyPage)
