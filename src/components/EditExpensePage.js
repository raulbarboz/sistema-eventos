import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './_ExpenseForm';
import { startEditEvent, startRemoveEvent } from '../actions/events'

const EditEventPage = (props) => {
  return(
    <div>
      <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense Form</h1>
          </div>
        </div>
      <div className="content-container">
          <ExpenseForm
            expense={props.event}
            onSubmit={(event) => {
              props.dispatch(startEditEvent(props.event.id, event)).then(() => {
                props.history.push('/');
              })
              
            }}
          />
        <button
            className="button btn-remove"
            onClick={() => {
              props.dispatch(startRemoveEvent({id: props.event.id})).then(()=>{ props.history.push('/') })
    
            }}
            >
            Remove
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    event: state.events.find((event) => event.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditEventPage);
