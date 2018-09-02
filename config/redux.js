import { createStore, applyMiddleware, combineReducers } from 'redux'
import { logger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import withRedux from 'next-redux-wrapper'

import reducers from '../redux/reducers'

class ReduxStore {
  constructor() {
    const reducer = { ...reducers }
    this.store = createStore(
      combineReducers(reducer),
      applyMiddleware(
        thunkMiddleware,
        logger
      )
    )
  }

  getStore() {
    return this.store
  }

  dispatch(action) {
    this.store.dispatch(action)
  }
}

export const reduxPage = (component) => withRedux(new ReduxStore)(component)