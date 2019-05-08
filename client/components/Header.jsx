import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

import {getCurrentCourse} from '../selectors'

export function Header({currentCourse}) {
    let subtitle = null
    if (currentCourse.learning) {
        subtitle = (
            <Link className="subtitle" routeName="select">
                {currentCourse.learning}
            </Link>
        )
    }

    return (
        <header>
            <Link className="title" routeName="landing">
                LangQuiz
            </Link>
            {subtitle}
        </header>
    )
}

export default connect(
    state => ({
        currentCourse: getCurrentCourse(state),
    })
)(Header)
