import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'

import ListItemLink from './ListItemLink'
import {getCoursesDisplay} from '../selectors'

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export function SelectPage({classes, courses}) {
    const choices = courses
        .map(it => {
            const linkProps = {
                key: it.name,
                routeParams: {
                    learning: it.learning,
                    from: it.from,
                },
            }
            return (
                <ListItemLink button routeName="study.quiz" {...linkProps}>
                    <ListItemText>{it.name}</ListItemText>
                </ListItemLink>
            )
        })
    return (
        <div className={classes.root}>
            <Paper>
                <List>
                    {choices}
                </List>
            </Paper>
        </div>
    )
}

export default compose(
    connect(
        state => ({
            courses: getCoursesDisplay(state),
        })
    ),
    withStyles(styles)
)(SelectPage)
