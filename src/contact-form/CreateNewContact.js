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
      <ContactForm handleSubmit={this.handleSubmit}
                   data={this.data} />
    );
  }
  handleSubmit() {

  }
}

export default CreateNewContact;
