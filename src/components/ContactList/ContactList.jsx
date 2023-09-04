import React from "react";
import { Item, List } from './ContactList.styled';
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {

  const contacts = useSelector(getContacts);
   console.log(contacts);
  // const filter = useSelector(getFilter);
  //  console.log(filter);
  // const filteredContacts = contacts.filter(contact =>
  //    contact.name === name
  // );



   return (
    <List>
      {contacts?.map((contact) => {
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