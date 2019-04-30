import React from 'react'
import {connect} from 'react-redux'

import LanguageSelectPage from './LanguageSelectPage'
import HomePage from './HomePage'

export function App({route, languages}) {
    if (route.name == "select") {
        return <LanguageSelectPage />
    }
    else if (route.name == "home") {
        return <HomePage />
    }
}

export default connect(
    state => ({
        route: state.router.route,
        languages: state.languages,
    })
)(App)
