import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Grid from '../grid/Grid';
import './ContactsList.css';

let ContactsList = ({ contactsArr }) => {
  return (
    <div className="ContactsList">
      <h1>Contacts List</h1>
      <nav>
        <Link to="create-new-contact">Create New Contact</Link>
      </nav>
      <Grid data={contactsArr} hiddenColumns={['id']} />
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
