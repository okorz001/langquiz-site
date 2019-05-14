import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

import StudyLayout from './StudyLayout'
import {getCurrentCourseWords} from '../selectors'

export function WordsPage({words}) {
    return (
        <StudyLayout>
            <Typography paragraph>
                <div>Found {words.length} words.</div>
            </Typography>
        </StudyLayout>
    )
}

export default connect(
    state => ({
        words: getCurrentCourseWords(state),
    })
)(WordsPage)
