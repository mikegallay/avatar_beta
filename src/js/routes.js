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
    <IndexRoute component={Page(Welcome, 'welcome')}></IndexRoute>
    <Route path="/build/:id" component={Page(Build, 'build')} />
    <Route path="/news" component={Page(News, 'news')}></Route>
  </Route>
)
