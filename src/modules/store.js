import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from 'modules/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = applyMiddleware(thunk)
const store = composeEnhancers(middleware)(createStore)(reducers)

export default store
