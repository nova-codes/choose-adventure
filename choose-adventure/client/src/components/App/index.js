import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './style.css';

import PrivateRoute from '../../hocs/PrivateRoute';

import Story from '../Pages/Story';
import NavBar from '../NavBar';
import Login from '../Pages/Login';
import Admin from '../Pages/Admin';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Story}/>
        <Route exact path="/login" component={Login}/>
        <PrivateRoute path="/admin" component={Admin}/>
      </Switch>
    </Router>
  );
}

export default App;
