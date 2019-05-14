import React from 'react'
import {connect} from 'react-redux'
import Typography from '@material-ui/core/Typography'

import RequireCourse from './RequireCourse'

export function RecentPage() {
    return (
        <React.Fragment>
            <RequireCourse />
            <Typography paragraph>
                Recent
            </Typography>
        </React.Fragment>
    )
}

export default connect(
)(RecentPage)
