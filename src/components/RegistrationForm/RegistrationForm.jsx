import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from '../ContactForm/ContactForm.styled';
import { RiMailFill, RiLockPasswordFill } from 'react-icons/ri';
import {  BsPersonFill } from 'react-icons/bs';
import { userSignUp } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const RegistrationForm = () => {
  const dispatch = useDispatch();


  

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    const newUser = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    }
    dispatch(userSignUp(newUser));

  };



  return (
    <Form  onSubmit={handleSubmit}>
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
        placeholder="User Name"
        required
      />

      <LabelWrapper>
        <FormField htmlFor="email">
          <RiMailFill />
          <LabelSpan>Email</LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email address"
        required
      />

      <LabelWrapper>
        <FormField htmlFor="password">
          <RiLockPasswordFill />
          <LabelSpan>Password</LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        required
      />

      <StyledButton type="submit">Sign up</StyledButton>
    </Form>
  );
};

export default RegistrationForm;
