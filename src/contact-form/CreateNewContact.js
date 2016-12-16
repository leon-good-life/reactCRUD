import React, { Component } from 'react';
import ContactForm from './ContactForm';

class CreateNewContact extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.data = {
      id:'',
      userName: '',
      lastName: '',
      company: '',
      phone: '',
      email: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Create New Contact</h1>
        <ContactForm handleSubmit={this.handleSubmit}
                     data={this.data} />
      </div>
    );
  }
  handleSubmit() {

  }
}

export default CreateNewContact;
