import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducers';

const middleWares = [thunk];

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middleWares));
}
