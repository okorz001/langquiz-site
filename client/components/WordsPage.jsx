import React from 'react'
import {connect} from 'react-redux'

import StudyLayout from './StudyLayout'
import {getCurrentCourseWords} from '../selectors'

export function WordsPage({words}) {
    return (
        <StudyLayout>
            <div>Found {words.length} words.</div>
        </StudyLayout>
    )
}

export default connect(
    state => ({
        words: getCurrentCourseWords(state),
    })
)(WordsPage)
