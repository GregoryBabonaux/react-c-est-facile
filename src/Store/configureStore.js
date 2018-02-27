import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootReducer  from './rootReducer'

import Sagas from '../Services/Sagas'

const sagaMiddleware = createSagaMiddleWare();

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(Sagas) 
  return store;
}

export default configureStore;

