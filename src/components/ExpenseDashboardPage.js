import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary.js';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <p>ExpenseDashboardPage</p>
    <ExpenseList />
  </div>
)

export default ExpenseDashboardPage;
