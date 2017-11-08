import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import example from 'modules/example/reducer'

export default combineReducers({
  example,
  routing: routerReducer,
})
