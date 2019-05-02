import React from 'react'
import {connect} from 'react-redux'

import {setCurrentCourse} from '../actions'
import {getLanguages, getRoute} from '../selectors'

function getLanguageName(languages, id) {
    const language = languages.find(it => it.id == id)
    return language ? language.name : id
}

export function StudyPage({route, languages, setCurrentCourse}) {
    const {learning, from} = route.params
    setCurrentCourse(learning, from)

    const learningName = getLanguageName(languages, learning)
    const fromName = getLanguageName(languages, from)
    return <div>You're learning {learningName} from {fromName}</div>
}

export default connect(
    state => ({
        route: getRoute(state),
        languages: getLanguages(state),
    }),
    {
        setCurrentCourse,
    }
)(StudyPage)
