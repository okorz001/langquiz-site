import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

import RequireCourse from './RequireCourse'
import {getCurrentCourseWords} from '../selectors'

export function WordsPage({words}) {
    return (
        <React.Fragment>
            <RequireCourse />
            <Typography paragraph>
                Found {words.length} words.
            </Typography>
        </React.Fragment>
    )
}

export default connect(
    state => ({
        words: getCurrentCourseWords(state),
    })
)(WordsPage)
