import { deleteContact } from 'redux/contacts/contact-operations';
import { useDispatch } from 'react-redux';
import { RxCross2, RxUpdate } from 'react-icons/rx';
import { ContactPhone } from './Contact.styled';
import { CloseBtn } from 'components/Modal/Modal.styled';
import { openModal } from 'redux/contacts/modal-slice';
import { getUpdatetContactId } from 'redux/contacts/contacts-slice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  const hendleOpenModal = () => {
    dispatch(openModal());
    dispatch(getUpdatetContactId(contact));
  };

  return (
    <>
      <li key={contact.id}>
        <p>
          {' '}
          {contact.name}:<ContactPhone>{contact.phone}</ContactPhone>
        </p>
        <button onClick={hendleOpenModal}>
          <RxUpdate />
        </button>
        <CloseBtn onClick={handleDelete}>
          {' '}
          <RxCross2 />
        </CloseBtn>
      </li>
    </>
  );
};

export default Contact;
