import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {withStyles} from '@material-ui/core/styles'

import RequireCourse from './RequireCourse'
import {getCurrentCourseWords} from '../selectors'

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export function WordsPage({classes, words}) {
    console.log(words[0])
    const rows = words.filter(words => words.translations.length)
    .map(word => {
        const translations = word.translations.map(it => (
            <TableCell key={it}>{it}</TableCell>
        ))
        return (
        <React.Fragment>
            <TableRow key={word.word}>
                <TableCell rowSpan={word.translations.length}>
                    {word.word}
                </TableCell>
                {translations[0]}
            </TableRow>
            {translations.slice(1).map(it => <TableRow>{it}</TableRow>)}
        </React.Fragment>
        )
    })
    return (
        <div className={classes.root}>
            <RequireCourse />
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Word</TableCell>
                            <TableCell>Translations</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}

export default compose(
    connect(
        state => ({
            words: getCurrentCourseWords(state),
        })
    ),
    withStyles(styles)
)(WordsPage)
