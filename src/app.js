import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000}))
//store.dispatch(addExpense({ description: 'bill', amount: 200, createdAt: 2000}))
//store.dispatch(addExpense({ description: 'raul', amount: 300, createdAt: 3000}))

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
