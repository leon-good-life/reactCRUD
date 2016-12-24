import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ContactForm from './ContactForm'
import { addContact } from '../redux/actions'
import { connect } from 'react-redux'

class CreateNewContact extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  render() {
    return (
      <div>
        <h1>Create New Contact</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
  handleSubmit(contactObj) {
    this.props.dispatch(addContact(contactObj))
    browserHistory.push('contacts-list')
  }
}

CreateNewContact = connect()(CreateNewContact)

export default CreateNewContact
