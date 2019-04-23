import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function LanguageSelectPage() {
    return <div>Select your language.</div>
}

function HomePage({match}) {
    const {learning, from} = match.params
    return <div>You're learning {learning} from {from}</div>
}

export default function App() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={LanguageSelectPage} />
                <Route path="/:learning/:from" component={HomePage} />
            </div>
        </Router>
    )
}
