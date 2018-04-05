import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';

class Routes extends Component {
   render() {
      return (
         <Router>
            <Switch>
                <Route exact path='/' component={App} />
                
            </Switch>
         </Router>
      );
   }
}
export default Routes;
