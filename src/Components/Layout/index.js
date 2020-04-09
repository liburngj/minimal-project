import React, { Component } from 'react'
import {
    AppBar, Toolbar, IconButton, Typography, Hidden,
    Drawer, Divider, 
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import CssBaseline from "@material-ui/core/CssBaseline";


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
  },
  appBar:{
    position:'absolute',
    marginLeft:drawerWidth,
    [theme.breakpoints.up('md')]:{
      width:`calc(100% - ${drawerWidth}px)`,
    }
  },
  navIconHide:{
    [theme.breakpoints.up('md')]:{
      display:'none',
    },
  },
  toolbar:theme.mixins.toolbar,
  drawerPaper:{
    width:drawerWidth,
    [theme.breakpoints.up('md')]:{
      position:'relative',
    },
  },
  content:{
    flexGrow:1,
    backgroundColor:theme.palette.background.default,
    padding:theme.spacing.unit*3,
  },
})

class Layout extends Component {
    state={
        mobileOpen: false
    }

    handleDrawerToggle=() =>{
        this.setState({mobileOpen:!this.state.mobileOpen})
    }

    render(){
      const { classes, children } = this.props
      const { mobileOpen } = this.state

      const drawer = (
        <div>
        <div className={classes.toolbar} />
        hello
        <Divider />
        </div>
      )

      return <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
      <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={this.handleDrawerToggle}
      className={classes.navIconHide}
      >
      <Menu />
      </IconButton>
      <Typography variant="title" color="inherit" noWrap>
      Writers Blog
      </Typography>
      </Toolbar>
      </AppBar>
      <Hidden mdUp>
      <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={this.handleDrawerToggle}
      classes={{paper:classes.drawerPaper,}}
      ModalProps={{ keepMounted: true, }}
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
      </React.Fragment>
    }
  }




export default withStyles(styles)(Layout)