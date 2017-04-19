import { applyMiddleware, createStore, combineReducers } from "redux"
import { routerReducer } from 'react-router-redux'

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

// const middleware = applyMiddleware(promise(), thunk, logger())

export default applyMiddleware(promise(), thunk, logger())(createStore)(
		combineReducers(Object.assign({}, { rootState: reducer }, { routing: routerReducer })),
		{}
	);
// export default createStore(reducer, middleware, )
