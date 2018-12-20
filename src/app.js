import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetEvents } from './actions/events';
import { startSetStuffs } from './actions/stuffs';
import { login, logout } from './actions/auth';
import getVisibleEvents from './selectors/events';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading....</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    store.dispatch(login(user.uid));
    store.dispatch(startSetStuffs())
    store.dispatch(startSetEvents()).then(() => {
    renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })

  }else{
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
})
