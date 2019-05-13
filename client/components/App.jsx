import React from 'react'
import {connect} from 'react-redux'

import Layout from './Layout'
import Theme from './Theme'
import HistoryPage from './HistoryPage'
import LandingPage from './LandingPage'
import QuizPage from './QuizPage'
import SelectPage from './SelectPage'
import WordsPage from './WordsPage'
import {getRoute} from '../selectors'

function getPage(route) {
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
        console.log(`Unknown route: ${route.path}`)
        return <div>404 Not Found</div>
    }
}

export function App({route}) {
    return (
        <Theme>
            <Layout>
                {getPage(route)}
            </Layout>
        </Theme>
    )
}

export default connect(
    state => ({
        route: getRoute(state),
    })
)(App)
