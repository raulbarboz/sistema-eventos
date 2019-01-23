import React from 'react';
import { connect } from 'react-redux';
import EventListItem from './EventListItem'
import selectEvents from '../selectors/events';
import { startRemoveEvent } from '../actions/events'



const EventList = (props) => {
  const deleteEvent = (id, name) => {
    let eventId = id;
    let imageName = name; 
    props.dispatch(startRemoveEvent({id: eventId, imageName}))
  }
  
  return(
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Eventos</div>
        <div className="show-for-desktop">Eventos</div>
      </div>
  
        {props.events.map((event, index) => {
          if((index + 1) % 3){
          return <EventListItem  onDelete={deleteEvent} key={event.id} {...event} styleClass="list-item margin-right" />
          }else{
          return <EventListItem  onDelete={deleteEvent} key={event.id} {...event} styleClass="list-item"/>
          }
          
        })
      }
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return{
   // events:selectEvents(state.events, state.filters)
    events:state.events
  }
}

export default connect(mapStateToProps)(EventList);
