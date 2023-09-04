import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Modal from 'components/Modal/Modal';
import Filter from '../components/Filter/Filter';
import { useEffect } from 'react';
import { getError, getIsLoading, getModal } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contact-operations';
import { Loader } from '../components/Loader/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isOpen = useSelector(getModal);


  if (error) {
  return <div>Something went wrong...</div>
}

  return (
    <>
       {isOpen && <Modal />}
       <ContactForm />
      <Filter />
      <ContactList />
      {/* {isLoading ? <Loader /> : <ContactList />}
      <Loader /> */}
    </> 
  );
};
export default ContactsPage;