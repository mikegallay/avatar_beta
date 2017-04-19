import React from 'react';
import { Route, IndexRoute } from 'react-router'

import Archives from "./pages/Archives"
import News from "./pages/News"

import App from "./components/App"
import Layout from "./components/Layout"

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Layout}></IndexRoute>
    <Route path="archives" name="archives" component={Archives}></Route>
    <Route path="news" name="news" component={News}></Route>
  </Route>
)
