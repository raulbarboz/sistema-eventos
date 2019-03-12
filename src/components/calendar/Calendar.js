import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/pt-br';

moment.locale('pt-BR');
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
 constructor(props) {
  super(props)
   
 }
render() {

    return (
      <div className="content-container" style={{ height: 700 , width:'100%', display: 'table', marginTop:'30px'}}>
        <BigCalendar
            localizer={localizer}
            timeslots={4}
            events={this.props.events}
            step={30}
            defaultView='month'
            views={['month']}
            defaultDate={new Date()}
         />
      </div>
    );
  }
}



export default Calendar;
