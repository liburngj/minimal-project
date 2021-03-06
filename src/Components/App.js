import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
//import { NotFound } from './Errors'
import Writers from './Writers'
import Layout from './Layout'

export default class extends Component{
  state={
    writers:[]
  }
//?_embed=texts
  async componentDidMount(){
    const writers= await ( await fetch('http://localhost:3004/writers'))
    .json()

    this.setState({ writers })
  }
// writers={writers} line 24
//line 29 writers={writers}
  render(){
    const { writers } = this.state


    return <BrowserRouter>
    <Layout writers={writers}>
    <Switch>
    <Route exact path="/" render={() => <div>Home</div>}/>
    <Route path="/writers" render={
      props=><Writers {...props}  writers={writers}/>
    } />
    </Switch>
    </Layout>
    </BrowserRouter>

  }



}