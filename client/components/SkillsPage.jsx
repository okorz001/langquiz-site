import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import InputBase from '@material-ui/core/InputBase'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core/styles/colorManipulator'
import SearchIcon from '@material-ui/icons/SearchOutlined'

import RequireCourse from './RequireCourse'
import {getCurrentCourseSkills} from '../selectors'
import {fuzzySearch} from '../utils'

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
})

export class SkillsPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            search: null,
        }

        this.setSearch = event => {
            this.setState({
                search: event.target.value,
                // reset pagination on search change
            })
        }
    }

    render() {
        const {classes, skills} = this.props
        const {search} = this.state

        const selectedSkills = skills
            .filter(skill => fuzzySearch(search, skill.title))

        const items = selectedSkills
            .map(skill => {
                return (
				    <ListItem divider>
					    <ListItemText primary={skill.title} />
			        </ListItem>
				)
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
					<List>
					    {items}
					</List>
                </Paper>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({
            skills: getCurrentCourseSkills(state),
        })
    ),
    withStyles(styles)
)(SkillsPage)
