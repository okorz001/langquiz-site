import React from 'react'
import {connect} from 'react-redux'

function getLanguageName(languages, id) {
    const language = languages.find(it => it.id == id)
    return language ? language.name : id
}

export function HomePage({learning, from, languages}) {
    const learningName = getLanguageName(languages, learning)
    const fromName = getLanguageName(languages, from)
    return <div>You're learning {learningName} from {fromName}</div>
}

export default connect(
    state => ({
        learning: state.router.route.params.learning,
        from: state.router.route.params.from,
        languages: state.languages,
    })
)(HomePage)
