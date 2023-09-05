import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  //updateContact,
} from './contact-operations';

const hendlePending = state => {
  state.contacts.isLoading = true;
};
const hendleReject = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      updatedContact: '',
      isLoading: false,
      error: null,
    },
     filter: '',
  },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },

  },
  extraReducers: {
    [fetchContacts.pending]: hendlePending,
    [addContact.pending]: hendlePending,
    [deleteContact.pending]: hendlePending,
    // [updateContact.pending]: hendlePending,

    [fetchContacts.rejected]: hendleReject,
    [addContact.rejected]: hendleReject,
    [deleteContact.rejected]: hendleReject,
    // [updateContact.rejected]: hendleReject,

    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    // [updateContact.fulfilled](state, action) {
    //   state.contacts.isLoading = false;
    //   state.contacts.error = null;
    //   const index = state.contacts.items.findIndex(
    //     contact => contact.id === action.payload.id
    //   );
    //   state.contacts.items.splice(index, 1, action.payload);
    // },
  },
});

export const { filterContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;