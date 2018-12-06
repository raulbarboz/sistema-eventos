import React from 'react';
import { Router, Route , Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from '../components/Home';
import AddEventPage from '../components/AddEventPage';
import EditExpensePage from '../components/EditExpensePage';
import OpenEventPage from '../components/OpenEventPage';
import DashboardPage from '../components/DashboardPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <div>
        <Switch>
            <PublicRoute path="/" component={ Home }  exact={true}/>
            <PrivateRoute path="/dashboard" component={ DashboardPage }/>
            <PrivateRoute path="/create" component={ AddEventPage } />
            <PrivateRoute path="/edit/:id" component={ EditExpensePage } />
            <PrivateRoute path="/event/:id" component={ OpenEventPage } />
            <Route component={ NotFoundPage } />
          </Switch>
        </div>
  </Router>
)

export default AppRouter;
