import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from "./cont/Home"
import History from "./cont/History"
class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <NavLink exact to="/"> Accueil </NavLink>
      <NavLink to="/notre-histoire" activeClassName="selected" > History </NavLink>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History} />
        </Switch>
      </BrowserRouter>
  );
  }
}

export default App;
