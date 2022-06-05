import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import WelcomePage from './component/WelcomePage';
import TestPage from './component/TestPage';
import StatisticPage from './component/StatisticPage'
import './App.css';

class App extends Component {

  render() {
      const NotFoundRedirect = () => < Redirect to = '/' / >
          return ( < Router >
              <div >

              <Switch >
              <Route exact path = "/"
              component = {WelcomePage}/> 
              <Route component = {TestPage} exact path = "/TestPage"
              /> 
               <Route component = {StatisticPage} exact path = "/StatisticPage"
              /> 
              </Switch > 
              </div> 
              </Router >
          )

  }
}

export default App


