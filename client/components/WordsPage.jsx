import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
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
    pagination: {
        display: 'flex',
        flexFlow: 'row wrap',
    },
}

export class WordsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 0,
            rowsPerPage: 10,
        }

        this.setPage = (event, page) => {
            this.setState({page})
        }

        this.setRowsPerPage = (event) => {
            this.setState({rowsPerPage: event.target.value})
        }
    }

    render() {
        const {classes, words} = this.props
        const {page, rowsPerPage} = this.state

        const rows = words
            // TODO: some words have zero translations?!
            .filter(words => words.translations.length)
            .slice((page) * rowsPerPage, (page + 1) * rowsPerPage)
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
                    <Table padding="dense">
                        <TableHead>
                            <TableRow>
                                <TableCell>Word</TableCell>
                                <TableCell>Translations</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows}
                        </TableBody>
                        <TableFooter>
                            <TablePagination count={words.length}
                                             page={page}
                                             onChangePage={this.setPage}
                                             rowsPerPage={rowsPerPage}
                                             onChangeRowsPerPage={this.setRowsPerPage}
                                             />
                        </TableFooter>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({
            words: getCurrentCourseWords(state),
        })
    ),
    withStyles(styles)
)(WordsPage)
