import React from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem'
import selectExpenses from '../selectors/expenses';



const EventList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Eventos</div>
      <div className="show-for-desktop">Eventos</div>
    </div>
    {props.expenses.map((expense) => {
      return <EventListItem key={expense.id} {...expense} />
    })
  }
  </div>
)

const mapStateToProps = (state) => {
  return{
    expenses:selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(EventList);
