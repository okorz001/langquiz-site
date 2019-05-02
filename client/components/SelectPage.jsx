import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'

import {getCoursesDisplay} from '../selectors'

export function SelectPage({courses}) {
    const choices = courses
        .map(it => {
            const linkProps = {
                routeName: 'study',
                routeParams: {
                    learning: it.learning,
                    from: it.from,
                },
            }
            return <li key={it.name}><Link {...linkProps}>{it.name}</Link></li>
        })
    return (
        <div>
            Select your language:
            <ul>{choices}</ul>
        </div>
    )
}

export default connect(
    state => ({
        courses: getCoursesDisplay(state),
    })
)(SelectPage)
