import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};


// Redux store holds the complete state tree of your app.
const store = createStore (
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

