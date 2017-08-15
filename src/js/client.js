import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, browserHistory } from 'react-router'
// import { createHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux';
// import { syncHistoryWithStore } from 'react-router-redux'

/*const history = useRouterHistory(createHistory)({
  basename: '/playground/avatar-beta'
})*/



import store from "./store"
import routes from "./routes"

const history = syncHistoryWithStore(browserHistory, store);

const app = document.getElementById('app')
// const history = syncHistoryWithStore(browserHistory, store)

console.log('store',store);
ReactDOM.render(<Provider store={ store }>
  <Router history={ history } routes={ routes } />
</Provider>, app);
