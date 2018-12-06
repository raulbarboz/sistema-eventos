import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddEvent } from '../actions/events';

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense Form</h1>
      </div>
    </div>
    <div className="content-container">
    <ExpenseForm
      onSubmit={(event) => {
        props.dispatch(startAddEvent(event));
        props.history.push('/');
      }}
    />
    </div>
  </div>
)

export default connect()(AddExpensePage);
