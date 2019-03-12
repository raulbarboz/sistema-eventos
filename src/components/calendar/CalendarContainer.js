import React from 'react';
import { connect } from 'react-redux';
import Calendar from './Calendar';
import moment from 'moment';


class CalendarContainer extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
      events: ''
  }
  let eventsArray = [];
  this.props.events.map((event) => {
      let startDate = moment(event.startDate);
      let endDate = moment(event.endDate);
      eventsArray.push({
          title: event.event,
          start: startDate,
          end: endDate,
          allDay:false,
          resource:''
      })
     
  })
  Promise.all(eventsArray).then(() => {
      this.setState({events: eventsArray})
  })
 }
render() {

    return (
        <div>
            {this.state.events && <Calendar events={this.state.events} />}
        </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return{
   // events:selectEvents(state.events, state.filters)
    events:state.events
  }
}

export default connect(mapStateToProps)(CalendarContainer);
