import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router5'
import {compose} from 'redux'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import AssignmentIcon from '@material-ui/icons/AssignmentOutlined'
import HistoryIcon from '@material-ui/icons/HistoryOutlined'
import LanguageIcon from '@material-ui/icons/LanguageOutlined'
import ListIcon from '@material-ui/icons/ListOutlined'
import MenuIcon from '@material-ui/icons/MenuOutlined'
import SettingsIcon from '@material-ui/icons/SettingsOutlined'

import ListItemLink from './ListItemLink'
import {getCurrentCourse} from '../selectors'

const DRAWER_WIDTH = 242

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: DRAWER_WIDTH,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
})

export class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showMenu: false,
        }

        this.showMenu = () => {
            this.setState({showMenu: true})
        }

        this.hideMenu = () => {
            this.setState({showMenu: false})
        }
    }

    render() {
        const {classes, theme, currentCourse} = this.props
        const {showMenu} = this.state

        const header = (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuButton}
                                color="inherit"
                                onClick={this.showMenu}
                                aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6"
                                color="inherit">
                        TODO: Page Title
                    </Typography>
                 </Toolbar>
             </AppBar>
        )

        const {learning, from} = currentCourse
        const linkParams = {
            disabled: !learning || !from,
            routeParams: {learning, from},
        }

        const drawer = (
          <div>
            <AppBar position="relative">
              <Toolbar>
                    <IconButton className={classes.menuButton}
                                color="inherit"
                                onClick={this.hideMenu}
                                aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6"
                                color="inherit">
                        LangQuiz
                    </Typography>
              </Toolbar>
            </AppBar>
            <Divider />
            <List>
              <ListItemLink button onClick={this.hideMenu} routeName="select">
                <ListItemIcon><LanguageIcon /></ListItemIcon>
                <ListItemText primary="Change Language" secondary={learning} />
              </ListItemLink>
              <Divider />
              <ListItemLink button
                            onClick={this.hideMenu}
                            routeName="study.quiz"
                            {...linkParams} >
                <ListItemIcon><AssignmentIcon /></ListItemIcon>
                <ListItemText primary="Quiz" />
              </ListItemLink>
              <ListItemLink button
                            onClick={this.hideMenu}
                            routeName="study.history"
                            {...linkParams} >
                <ListItemIcon><HistoryIcon /></ListItemIcon>
                <ListItemText primary="History" />
              </ListItemLink>
              <ListItemLink button
                            onClick={this.hideMenu}
                            routeName="study.skills"
                            {...linkParams} >
                <ListItemIcon><ListIcon /></ListItemIcon>
                <ListItemText primary="Skills" />
              </ListItemLink>
              <ListItemLink button
                            onClick={this.hideMenu}
                            routeName="study.words"
                            {...linkParams} >
                <ListItemIcon><ListIcon /></ListItemIcon>
                <ListItemText primary="Words" />
              </ListItemLink>
              <Divider />
              <ListItemLink button onClick={this.hideMenu} disabled>
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemLink>
            </List>
          </div>
        )

        const nav = (
            <nav className={classes.drawer}>
              <Hidden smUp>
                <Drawer
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={showMenu}
                  onClose={this.hideMenu}
                  classes={{paper: classes.drawerPaper}}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown>
                <Drawer
                  classes={{paper: classes.drawerPaper}}
                  variant="permanent"
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
        )

        return (
            <div className={classes.root}>
                <CssBaseline />
                {header}
                {nav}
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default compose(
    connect(
        state => ({
            currentCourse: getCurrentCourse(state),
        })
    ),
    withStyles(styles, {withTheme: true})
)(Layout)
