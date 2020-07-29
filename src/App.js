import React, {Component} from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GamePage from './Pages/game'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {GamePage}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
