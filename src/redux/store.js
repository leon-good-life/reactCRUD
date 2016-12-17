import { createStore } from 'redux';
import { contactsApp }  from './reducers';
import { dataArr } from '../dataArr';
import { addContact } from './actions';

let store = createStore(contactsApp);

for (let contactObj of dataArr) {
  store.dispatch(addContact(contactObj));
}

export default store;
