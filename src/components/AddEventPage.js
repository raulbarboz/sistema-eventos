import React from 'react';
import { connect } from 'react-redux';
import EventForm from './EventForm';
import { startAddEvent } from '../actions/events';

const AddEventPage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Criar novo evento</h1>
      </div>
    </div>
    <div className="content-container">
    <EventForm
      onSubmit={(event) => {
        props.dispatch(startAddEvent(event));
        props.history.push('/');
      }}
    />
    </div>
  </div>
)

export default connect()(AddEventPage);
