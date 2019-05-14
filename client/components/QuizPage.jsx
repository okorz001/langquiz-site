import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

import RequireCourse from './RequireCourse'

export function QuizPage() {
    return (
        <React.Fragment>
            <RequireCourse />
            <Typography paragraph>
                Quiz
            </Typography>
        </React.Fragment>
    )
}

export default connect(
)(QuizPage)
