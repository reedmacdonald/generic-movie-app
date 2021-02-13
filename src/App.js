import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './screens/Home'
import Authentication from './screens/Authentication'
import Layout from '../src/common/Layout'
import Movies from './screens/Movies'
import { Component } from "react";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/home" render={() => { return <Layout><Home /></Layout> }} />
        <Route path="/add-movies" render={() => { return <Layout><Movies /></Layout> }} />
        <Route path="/" render={() => { return <Layout><Authentication /></Layout> }} />
      </Switch>
    </Router>
  );
}

export default App;
