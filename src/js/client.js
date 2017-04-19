import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, browserHistory, hashHistory } from "react-router"
// import { syncHistoryWithStore } from 'react-router-redux'

import store from "./store"
import routes from "./routes"

const app = document.getElementById('app')
// const history = syncHistoryWithStore(browserHistory, store)

console.log('store',store);
ReactDOM.render(<Provider store={ store }>
  <Router history={ browserHistory } routes={ routes } />
</Provider>, app);
