export const getContacts = state => state.contacts.contacts.items;
export const getIsLoading = state => state.contacts.contacts.isLoading;
export const getError = state => state.contacts.contacts.error;
//export const getupdatedContact = state => state.contacts.contacts.updatedContact;
export const getFilter = state=> state.contacts.filter;
export const getModal = state => state.modal.isOpen;
export const getState = state => state;