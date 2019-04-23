import React, {useEffect, useState} from 'react'
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

function HomePage({learning, from, languages}) {
    const learningName = getLanguageName(languages, learning)
    const fromName = getLanguageName(languages, from)
    return <div>You're learning {learningName} from {fromName}</div>
}

function getLanguageName(languages, id) {
    const language = languages.find(it => it.id == id)
    return language ? language.name : id
}

export default function App() {
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        if (languages.length) return
        console.log('/api/getLanguages')
        fetch('/api/getLanguages')
            .then(res => res.json())
            .then(langs => langs.sort((a, b) =>
                a.name.localeCompare(b.name)
            ))
            .then(setLanguages)
            .catch(console.error)
    })

    return (
        <Router>
            <div>
                <Route path="/"
                       exact
                       render={() => <LanguageSelectPage languages={languages} />} />
                <Route path="/:learning/:from"
                       render={({match}) =>
                           <HomePage learning={match.params.learning}
                                     from={match.params.from}
                                     languages={languages} />
                       } />
            </div>
        </Router>
    )
}
