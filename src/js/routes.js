import React from 'react';
import { Route, IndexRoute } from 'react-router'

import Archives from "./containers/Archives"
import News from "./containers/News"

// import KeyableElement from "./components/KeyableElement"
import App from "./containers/App"
import Layout from "./containers/Layout"
import Build from "./containers/Build"

export default (
  <Route path="/" component={Build}>
    <IndexRoute component={Archives}></IndexRoute>
    <Route path="archives" name="archives" component={Archives}></Route>
    <Route path="news" name="news" component={News}></Route>
  </Route>
)
