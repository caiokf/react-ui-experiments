import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from 'modules/store'

import HomePage from 'views/pages/home.page'

import AnimatedStatusIconsPage from 'views/pages/animated-status-icons/page'

const history = syncHistoryWithStore(createBrowserHistory(), store)

export default (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route exact path="/animated-status-icons" component={AnimatedStatusIconsPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
)
