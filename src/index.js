import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import store from './redux/store';
import ContactsList from './contacts-list/ContactsList';
import CreateNewContact from './contact-form/CreateNewContact';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={ContactsList} />
      <Route path='/contacts-list' component={ContactsList} />
      <Route path='/create-new-contact' component={CreateNewContact} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
