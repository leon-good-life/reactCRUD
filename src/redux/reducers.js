import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT } from './actions'
import _ from 'lodash'

const addContact = (state = [], action) => {
  return [
    ...state,
    {
      id: action.contact.id,
      firstName: action.contact.firstName,
      lastName: action.contact.lastName,
      company: action.contact.company,
      phone: action.contact.phone,
      email: action.contact.email
    }
  ]
}

const updateContact = (state = [], action) => {
  let newState = _.clone(state)
  let index = _.findIndex(newState, {'id': action.contact.id})
  newState[index] = action.contact
  return newState
}

const deleteContact = (state = [], action) => {
  let newState = _.clone(state)
  _.remove(newState, {'id': action.id})
  return newState
}

export const contactsApp = (state = [], action) => {
  switch (action.type) {
    case ADD_CONTACT: return addContact(state, action)
    case UPDATE_CONTACT: return updateContact(state, action)
    case DELETE_CONTACT: return deleteContact(state, action)
    default: return state
  }
}
