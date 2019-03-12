import React from 'react';
import AddEvents from './AddEvents';
import EventList from './EventList';
import Calendar from './calendar/Calendar';

const DashboardPage = () => (
  <div>
    <AddEvents />
    <EventList />
    <Calendar />
  </div>
)

export default DashboardPage;
