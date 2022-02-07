import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const delContactRequest = createAction('contacts/delContactRequest');
const delContactSuccess = createAction('contacts/delContactSuccess');
const delContactError = createAction('contacts/delContactError');

const delContacts = createAction('contacts/DELETE');
const filterContacts = createAction('contacts/FILTER');

export {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
  delContacts,
  filterContacts,
};
