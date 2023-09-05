import React from "react";
import { Item, List } from './ContactList.styled';
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {

  const contacts = useSelector(getContacts);
   console.log(contacts);
  const filtered = useSelector(getFilter);
  console.log(filtered);
  
const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().trim().includes(normalizedFilter) ||
      number.trim().includes(normalizedFilter)
  );

  //   const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filtered.toLowerCase())
  // );
  

   return (
    <List>
      {filteredContacts?.map((contact) => {
        return (
          <Item key={contact.id}>
             <Contact key={contact.id} contact={contact} />
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;