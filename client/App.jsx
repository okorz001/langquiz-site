import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function LanguageSelectPage({languages}) {
    const choices = languages
        // TODO: hardcoding en, can't learn en from en
        .filter(it => it.id != 'en')
        .map(it => {
            const path = `/${it.id}/en`
            return <li key={it.id}><Link to={path}>{it.name}</Link></li>
        })
    return (
        <div>
            Select your language:
            <ul>{choices}</ul>
        </div>
    )
}

const LanguageSelectPage2 = connect(
    state => ({languages: state.languages})
)(LanguageSelectPage)

function HomePage({learning, from, languages}) {
    const learningName = getLanguageName(languages, learning)
    const fromName = getLanguageName(languages, from)
    return <div>You're learning {learningName} from {fromName}</div>
}

const HomePage2 = connect(
    (state, ownProps) => ({
        learning: ownProps.match.params.learning,
        from: ownProps.match.params.from,
        languages: state.languages,
    })
)(HomePage)

function getLanguageName(languages, id) {
    const language = languages.find(it => it.id == id)
    return language ? language.name : id
}

export default function App({languages}) {
    // Only route valid languages
    const langRegex = languages
        .map(it => it.id)
        .join('|')
    const homePath = `/:learning(${langRegex})/:from(${langRegex})`

    return (
        <Router>
            <div>
                <Route path="/" exact component={LanguageSelectPage2} />
                <Route path={homePath} component={HomePage2} />
            </div>
        </Router>
    )
}
