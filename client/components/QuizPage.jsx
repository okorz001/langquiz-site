import React from 'react'
import {connect} from 'react-redux'

import StudyLayout from './StudyLayout'

export function QuizPage() {
    return (
        <StudyLayout>
            <div>Quiz</div>
        </StudyLayout>
    )
}

export default connect(
)(QuizPage)
