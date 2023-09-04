export const getContacts =({contacts}) => contacts.items;
export const getIsLoading = ({contacts}) => contacts.isLoading;
export const getError = ({contacts}) => contacts.error;
export const getupdatedContact = ({contacts}) => contacts.updatedContact;
export const getFilter = state => state.filter.filter;
export const getFilterAlphabet = state => state.filter.filterAlphabet;
export const getModal = state => state.modal.isOpen;
export const getState = state => state;