import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

function LanguageSelectPage({languages}) {
    const choices = languages
        // TODO: hardcoding en, can't learn en from en
        .filter(it => it.id != 'en')
        .map(it => {
            const linkProps = {
                routeName: 'home',
                routeParams: {
                    learning: it.id,
                    from: 'en',
                },
            }
            return <li key={it.id}><Link {...linkProps}>{it.name}</Link></li>
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
    state => ({
        learning: state.router.route.params.learning,
        from: state.router.route.params.from,
        languages: state.languages,
    })
)(HomePage)

function getLanguageName(languages, id) {
    const language = languages.find(it => it.id == id)
    return language ? language.name : id
}

function App({route, languages}) {
    // Only route valid languages
    const langRegex = languages
        .map(it => it.id)
        .join('|')
    const homePath = `/:learning(${langRegex})/:from(${langRegex})`

    console.log(route)
    if (route.name == "select") {
        return <LanguageSelectPage2 />
    }
    else if (route.name == "home") {
        return <HomePage2 />
    }
}

export default connect(
    state => ({
        route: state.router.route,
        languages: state.languages,
    })
)(App)
