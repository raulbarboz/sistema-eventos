import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'asdefe',
    description: 'January Rent',
    note: 'This was the final payment',
    amount: 54500,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date for amount
    startDate: undefined,
    endDate: undefined
  }
};
