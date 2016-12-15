import React, { Component } from 'react';
import './ContactForm.css'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="hidden"
               value={this.props.data.id} />
        <input value={this.props.data.firstName}
               placeholder="First Name" />
        <input value={this.props.data.lastName}
               placeholder="Last Name" />
        <input value={this.props.data.company}
               placeholder="Company" />
        <input value={this.props.data.phone}
               placeholder="Phone" />
        <input value={this.props.data.email}
               placeholder="Email" />
        <button type="submit">Save</button>
        <button type="button"
                onClick={this.handleCancel}>Cancel</button>
      </form>
    );
  }
  handleCancel() {

  }
}

export default ContactForm;
