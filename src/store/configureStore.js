import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import eventsReducer from '../reducers/events';
import stuffsReducer from '../reducers/stuffs';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  // store creation
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      stuffs: stuffsReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
