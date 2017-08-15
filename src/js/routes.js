import React from 'react';
import { Route, IndexRoute } from 'react-router'

import Page from "./components/Page"

import Archives from "./containers/Archives"
import News from "./containers/News"

// import KeyableElement from "./components/KeyableElement"
import App from "./containers/App"
import Layout from "./containers/Layout"
import Build from "./containers/Build"
import Welcome from "./containers/Welcome"

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome}></IndexRoute>
    <Route path="/build" component={Build}>
      <Route path="/build/:id" component={Page(Build, 'build-detail')} />
    </Route>
    <Route path="/news" component={News}></Route>
  </Route>
)
