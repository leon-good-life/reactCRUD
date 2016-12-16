import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import ContactsList from './contacts-list/ContactsList';
import CreateNewContact from './contact-form/CreateNewContact'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={ContactsList} />
    <Route path='/contacts-list' component={ContactsList} />
    <Route path='/create-new-contact' component={CreateNewContact} />
  </Router>,
  document.getElementById('root')
);
