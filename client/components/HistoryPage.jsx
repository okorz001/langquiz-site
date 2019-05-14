import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

import StudyLayout from './StudyLayout'

export function RecentPage() {
    return (
        <StudyLayout>
            <Typography paragraph>
                <div>Recent</div>
            </Typography>
        </StudyLayout>
    )
}

export default connect(
)(RecentPage)
