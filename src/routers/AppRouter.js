import React from 'react';
import { Router, Route , Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/home/Home';
import AddEventPage from '../components/AddEventPage';
import OpenEventPage from '../components/OpenEventPage';
import DashboardPage from '../components/DashboardPage';
import CalendarContainer from '../components/calendar/CalendarContainer';
import Search from '../components/home/Search';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <div>
        <Switch>
          <PublicRoute path="/" component={ Home } exact={ true } />
          <PublicRoute path="/search" component={ Search } exact={ true } />
          <PrivateRoute path="/dashboard" component={ DashboardPage } exact={ true } />
          <PrivateRoute path="/calendar" component={ CalendarContainer } exact={ true }/>
          <PrivateRoute path="/create" component={ AddEventPage } exact={ true }/>
          <PrivateRoute path="/event/:id" component={ OpenEventPage } exact={ true }/>
          <Route component={ NotFoundPage } />
        </Switch>
        </div>
  </Router>
)

export default AppRouter;
