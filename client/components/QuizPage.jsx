import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

import StudyLayout from './StudyLayout'

export function QuizPage() {
    return (
        <StudyLayout>
            <Typography paragraph>
                <div>Quiz</div>
            </Typography>
        </StudyLayout>
    )
}

export default connect(
)(QuizPage)
