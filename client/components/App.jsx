import React from 'react'
import {connect} from 'react-redux'

import HistoryPage from './HistoryPage'
import LandingPage from './LandingPage'
import QuizPage from './QuizPage'
import SelectPage from './SelectPage'
import WordsPage from './WordsPage'
import {getLanguages, getRoute} from '../selectors'

export function App({route, languages}) {
    if (!route) {
        return <div>Loading...</div>
    }
    // TODO: map
    else if (route.name == 'landing') {
        return <LandingPage />
    }
    else if (route.name == 'select') {
        return <SelectPage />
    }
    else if (route.name == 'study.quiz') {
        return <QuizPage />
    }
    else if (route.name == 'study.history') {
        return <HistoryPage />
    }
    else if (route.name == 'study.words') {
        return <WordsPage />
    }
    else {
        return <div>404</div>
    }
}

export default connect(
    state => ({
        route: getRoute(state),
        languages: getLanguages(state),
    })
)(App)
