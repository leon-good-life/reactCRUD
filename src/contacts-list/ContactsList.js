import React, { Component } from 'react';
import { Link } from 'react-router';
import Grid from '../grid/Grid';
import { dataArr } from '../dataArr';
import './ContactsList.css';

class ContactsList extends Component {
  render() {
    return (
      <div className="ContactsList">
        <h1>Contacts List</h1>
        <nav>
          <Link to="create-new-contact">Create New Contact</Link>
        </nav>
        <Grid data={dataArr} hiddenColumns={['id']} />
      </div>
    );
  }
}

export default ContactsList;
