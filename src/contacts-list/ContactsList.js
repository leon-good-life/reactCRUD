import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import Grid from '../grid/Grid';
import { deleteContact } from '../redux/actions';
import './ContactsList.css';

let ContactsList = ({ dispatch, contactsArr }) => {
  let actions = [{
    name: 'Delete',
    fn: (contact)=>{
      dispatch(deleteContact(contact.id));
    }
  }, {
    name: 'Edit',
    fn: (contact)=>{
      browserHistory.push('edit-contact/' + contact.id);
    }
  }];
  return (
    <div className="ContactsList">
      <h1>Contacts List</h1>
      <nav>
        <Link to="create-new-contact">Create New Contact</Link>
      </nav>
      <Grid data={contactsArr}
            hiddenColumns={['id']}
            actions={actions} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    contactsArr: state || []
  }
}

ContactsList = connect(mapStateToProps)(ContactsList);

export default ContactsList;
