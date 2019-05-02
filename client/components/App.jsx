import React from 'react'
import {connect} from 'react-redux'

import LandingPage from './LandingPage'
import SelectPage from './SelectPage'
import StudyPage from './StudyPage'
import {getLanguages, getRoute} from '../selectors'

export function App({route, languages}) {
    if (!route) {
        return <div>Loading...</div>
    }
    else if (route.name == 'landing') {
        return <LandingPage />
    }
    else if (route.name == 'select') {
        return <SelectPage />
    }
    else if (route.name == 'study') {
        return <StudyPage />
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
