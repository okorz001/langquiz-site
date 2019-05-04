import React from 'react'
import {connect} from 'react-redux'

import StudyLayout from './StudyLayout'

export function RecentPage() {
    return (
        <StudyLayout>
            <div>Recent</div>
        </StudyLayout>
    )
}

export default connect(
)(RecentPage)
