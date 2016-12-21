import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    if (this.props.data) {
      this.data = this.props.data;
    } else {
      this.data = {
        id: String(Date.now()),
        userName: '',
        lastName: '',
        company: '',
        phone: '',
        email: ''
      }
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}
            className="contact-form">
        <input type="hidden"
               value={this.data.id}
               name="id" />
        <input defaultValue={this.data.firstName}
               placeholder="First Name"
               name="firstName" />
        <input defaultValue={this.data.lastName}
               placeholder="Last Name"
               name="lastName" />
        <input defaultValue={this.data.company}
               placeholder="Company"
               name="company" />
        <input defaultValue={this.data.phone}
               placeholder="Phone"
               name="phone" />
        <input defaultValue={this.data.email}
               placeholder="Email"
               name="email" />
        <button type="submit">Save</button>
        <button type="button"
                onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }
  handleCancel() {
    browserHistory.push('contacts-list');
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit({
      id: e.target.querySelector('[name="id"]').value,
      firstName: e.target.querySelector('[name="firstName"]').value,
      lastName: e.target.querySelector('[name="lastName"]').value,
      company: e.target.querySelector('[name="company"]').value,
      phone: e.target.querySelector('[name="phone"]').value,
      email: e.target.querySelector('[name="email"]').value
    });
  }
}

export default ContactForm;
