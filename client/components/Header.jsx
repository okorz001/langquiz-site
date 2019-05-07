import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

import {getCurrentCourse} from '../selectors'

export function Header({currentCourse}) {
    let subtitle = null
    if (currentCourse.learning) {
        subtitle = <div className="subtitle">{currentCourse.learning}</div>
    }

    return (
        <header>
            <Link routeName="select">
                <div className="title">LangQuiz</div>
                {subtitle}
            </Link>
        </header>
    )
}

export default connect(
    state => ({
        currentCourse: getCurrentCourse(state),
    })
)(Header)
