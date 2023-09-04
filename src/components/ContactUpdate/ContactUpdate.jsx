import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from '../ContactForm/ContactForm.styled';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/contacts/modal-slice';
import { updateContact } from 'redux/contacts/contact-operations';
import { getupdatedContact } from 'redux/contacts/selectors';

const ContactUpdate = () => {
  const dispatch = useDispatch();
  const { id, name, number } = useSelector(getupdatedContact);
  const handleSubmit = (value, { resetForm }) => {
    dispatch(updateContact({ id, value }));
    resetForm();
    dispatch(closeModal());
  };
    
return (
  <Form initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
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
      placeholder={name}
      required
    />

    <LabelWrapper>
      <FormField htmlFor="number">
        <BsFillTelephoneFill />
        <LabelSpan>Number</LabelSpan>
      </FormField>
    </LabelWrapper>
    <FieldFormik
      id="number"
      type="text"
      name="number"
      autoComplete="number"
      required
      placeholder={number}
    />
    <StyledButton type="submit">Update contact</StyledButton>
  </Form>
);
};

export default ContactUpdate;