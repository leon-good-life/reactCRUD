import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ContactForm from './ContactForm'
import { updateContact } from '../redux/actions'
import { connect } from 'react-redux'
import _ from 'lodash'

class EditContact extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    let contactId = this.props.params['contactId']
    let contactsArr = this.props.contactsArr
    let index = _.findIndex(contactsArr, {'id': contactId})
    this.data = contactsArr[index]
  }
  render() {
    return (
      <div>
        <h1>Edit Contact</h1>
        <ContactForm handleSubmit={this.handleSubmit}
                     data={this.data} />
      </div>
    )
  }
  handleSubmit(contactObj) {
    this.props.dispatch(updateContact(contactObj))
    browserHistory.goBack()
  }
}

const mapStateToProps = (state) => {
  return {
    contactsArr: state || []
  }
}

EditContact = connect(mapStateToProps)(EditContact)

export default EditContact
