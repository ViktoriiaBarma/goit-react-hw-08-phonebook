import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contact-operations';
import { IoMdPersonAdd } from 'react-icons/io';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from './ContactForm.styled';
// import { option } from 'utils/toastifyOptions';
// import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
 // const contacts = useSelector(getContacts);
  
  //   const contacts = useSelector(getContacts);

  // const handleSubmit = (value) => {
  //   if (contacts.some(({ name }) => name === value.name)) {
  //     return toast('contact alredy added', option);
  //   }
  //   dispatch(addContact(value));
  //   toast('contact added', option);
  // };



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const number = form.number.value;


    const obj = {
      name,
      number
    }
      dispatch(addContact(obj));
form.reset()
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelWrapper>
        <FormField htmlFor="name">
          <BsPersonFill />
          <LabelSpan>Name</LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Name"
        required
      />

      <LabelWrapper>
        <FormField htmlFor="number">
          <BsFillTelephoneFill />
          <LabelSpan>Number</LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik
        type="tel"
        name="number"
        autoComplete="number"
        required
        placeholder="+38-050-123-45-67"
      />
      <StyledButton type="submit">
        <IoMdPersonAdd size="16" />
        Add contact
      </StyledButton>
    </Form>
  );
};

export default ContactForm;
