/*
 * action types
 */

export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const DELETE_CONTACT = 'DELETE_CONTACT'

/*
 * action creators
 */

export const addContact = (contact) => ({ type: ADD_CONTACT, contact })
export const updateContact = (contact) => ({ type: UPDATE_CONTACT, contact })
export const deleteContact = (id) => ({ type: DELETE_CONTACT, id })
