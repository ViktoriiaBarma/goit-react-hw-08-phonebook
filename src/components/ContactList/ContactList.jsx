import {  List } from './ContactList.styled';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  
   return (
    <List>
       {filteredContacts &&
        filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
    </List>
  );
};

export default ContactList;