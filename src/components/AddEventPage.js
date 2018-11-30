import React from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { startAddExpense } from '../actions/expenses';

const AddEventPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Criar novo evento</h1>
      </div>
    </div>
    <div className="content-container">
    <EventForm
      onSubmit={(expense) => {
        props.dispatch(startAddExpense(expense));
        props.history.push('/');
      }}
    />
    </div>
  </div>
)

export default connect()(AddEventPage);
