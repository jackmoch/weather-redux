import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import createLogger from 'redux-logger'


import App from './components/app'
import reducers from './reducers'

const logger = createLogger()

const createStoreWithMiddleWare = applyMiddleware(ReduxPromise, logger)(createStore)

ReactDOM.render(
	<Provider store={createStoreWithMiddleWare(reducers)}>
		<App />
	</Provider>,
	document.querySelector('.container')
)