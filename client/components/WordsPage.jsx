import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import {withStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core/styles/colorManipulator'
import SearchIcon from '@material-ui/icons/SearchOutlined'

import RequireCourse from './RequireCourse'
import {getCurrentCourseWords} from '../selectors'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },


  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    width: '100%',
  },

    pagination: {
        display: 'flex',
        flexFlow: 'row wrap',
    },
})

export class WordsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: null,
            page: 0,
            rowsPerPage: 10,
        }

        this.setSearch = event => {
            this.setState({
                search: event.target.value,
                // reset pagination on search change
                page: 0,
            })
        }

        this.setPage = (event, page) => {
            this.setState({page})
        }

        this.setRowsPerPage = event => {
            this.setState({rowsPerPage: event.target.value})
        }
    }

    render() {
        const {classes, words} = this.props
        const {search, page, rowsPerPage} = this.state

        const selectedWords = words
            // TODO: some words have zero translations?!
            .filter(word => word.translations.length)
            .filter(word => {
                if (!search) {
                    return true
                }
                return !search ||
                    // TODO: locale-safe and caps insensitive
                    word.word.search(search) != -1 ||
                    word.translations.some(it => it.search(search) != -1)
            })

        const rows = selectedWords
            .slice((page) * rowsPerPage, (page + 1) * rowsPerPage)
            .map(word => {
                const wordCell = (
                    <TableCell rowSpan={word.translations.length}>
                        {word.word}
                    </TableCell>
                )
                return word.translations.map((translation, i) => (
                    <TableRow key={word.word + i}>
                        {i == 0 ? wordCell : null}
                        <TableCell>{translation}</TableCell>
                    </TableRow>
                ))
            })

        return (
            <div className={classes.root}>
                <RequireCourse />
                <Paper>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase classes={{
                                       root: classes.inputRoot,
                                       input: classes.inputInput
                                   }}
                                   placeholder="Search..."
                                   onChange={this.setSearch} />
                    </div>
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
                    </Table>
                    <TablePagination component="div"
                                     count={selectedWords.length}
                                     page={page}
                                     onChangePage={this.setPage}
                                     rowsPerPage={rowsPerPage}
                                     onChangeRowsPerPage={this.setRowsPerPage} />
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
