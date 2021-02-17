import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Authentication from './screens/Authentication'
import Layout from '../src/common/Layout'
import Movies from './screens/Movies'
import Table from './screens/Table'
import OtherTable from './screens/Table/OthersTable'
import { createGlobalStyle } from 'styled-components'
import { Component } from "react";
import { getUser } from '../src/functions'


const Global = createGlobalStyle`
font-family:Lato
`
const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/add-movies" render={() => { return <Layout><Movies /></Layout> }} />
        <Route exact path="/table" render={() => { return <Layout><Table /></Layout> }} />
        <Route path="/table/:otherUser" render={() => { return <Layout><OtherTable /></Layout> }} />
        <Route path="/" render={() => { return <Layout><Authentication /></Layout> }} />
      </Switch>
    </Router>
  );
}

export default App;
