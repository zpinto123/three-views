import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root-reducers';

const middleWares = [thunk, logger];

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
}
