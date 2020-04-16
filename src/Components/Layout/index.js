import React, { Component, Fragment } from 'react'
import {
    AppBar, Toolbar, IconButton, Typography, Hidden,
    Drawer, MenuList, MenuItem 
} from '@material-ui/core'
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {  InsertComment } from '@material-ui/icons'
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from 'clsx';
import { compose } from 'recompose'

const drawerWidth=240;
const styles=theme=>({
  root:{
    flexGrow:1,
    height:430,
    zIndex:1,
    overflow:'hidden',
    position:'relative',
    display:'flex',
    width:'100%',
    justifyContent:"space-evenly",
  },
  appBar: {
   /* transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),*/
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
 /* appBar:{
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position:'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]:{
      width:`calc(100% - ${drawerWidth}px)`,
    },
  },*/
  navIconHide:{
    [theme.breakpoints.up('md')]:{
      display:'none',
    },
    marginRight: theme.spacing(2),
    //width: drawerWidth,
    flexShrink: 0,
    position:'fixed',
    left:`calc(100% - ${60}px)`,
   // marginRight: drawerWidth,
    //left:`calc(80%)- ${100}px)`,
  },
  toolbar:theme.mixins.toolbar,
  drawerPaper:{
    width: drawerWidth,
    [theme.breakpoints.up('md')]:{
      position:'relative',
    },
  },
  content:{
    flexGrow:1,
    backgroundColor:theme.palette.background.default,
    padding: theme.spacing.unit*3,
  },
  nested:{
    paddingLeft:theme.spacing.unit*4,
  },
})
//{classes.appBar}
class Layout extends Component {
    state={
        mobileOpen: false
    }

    handleDrawerToggle=() =>{
        this.setState({mobileOpen:!this.state.mobileOpen})
    }
    render(){
    
      const { classes, children, location: { pathname }, writers } = this.props
      const { mobileOpen } = this.state

      const drawer = (
        <div>
        <Hidden smDown>
        <div className={classes.toolbar} />
        </Hidden>
        <MenuList>
        <MenuItem component={Link} to="/" selected={'/'===pathname}>Home
        </MenuItem>
        <MenuItem component={Link} to="/writers" selected={'/writers'===pathname}>Writers
        </MenuItem>
        <MenuList>
        {writers.map(({ id, name })=>{
          const to =`/writers/${id}`
          return <MenuItem 
          key={id} 
          className={classes.nested} 
          component={Link} 
          to={to}
          selected={to===pathname}
          >
          {name}
          </MenuItem>
        })}
        </MenuList>
        </MenuList>
        </div>
      )
      

      return <Fragment>
      <CssBaseline />
      <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}
      >
      <Toolbar>
      <Typography variant="title" color="inherit" noWrap>
      Writers Blog
      </Typography>
      <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={this.handleDrawerToggle}
      className={classes.navIconHide}
      >
      <InsertComment />
      </IconButton>
      </Toolbar>
      </AppBar>
      <Hidden mdUp>
      <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={this.handleDrawerToggle}
      classes={{paper:classes.drawerPaper,}}
      ModalProps={{ keepMounted: true, }}
      anchor="right"
      >{drawer}
      </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
      <Drawer
      variant="permanent"
      open
      classes={{paper:classes.drawerPaper,}}
      >{drawer}
      </Drawer>
      </Hidden>
      <main className={classes.content}>
      <div className={classes.toolbar} />
      {children}
      </main>
      </div>
      </Fragment>
    }
  }




export default compose(
  withRouter,
  withStyles(styles)
)(Layout)