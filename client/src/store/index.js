// client/src/store/index.js
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import yourReducer from './reducers/yourReducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  yourState: yourReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;

