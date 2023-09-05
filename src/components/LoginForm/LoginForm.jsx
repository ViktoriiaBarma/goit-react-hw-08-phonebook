import { userLogIn } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import {
  Form,
  FormField,
  FieldFormik,
  StyledButton,
  LabelWrapper,
  LabelSpan,
} from '../ContactForm/ContactForm.styled';
import {
  RiMailFill,
  RiLockPasswordFill,
  RiLogoutBoxRLine,
} from 'react-icons/ri';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
console.log(form)
    const email = form.email.value;
    const password = form.password.value;
     const obj = {
      email,
      password
    }

    console.log(obj.password)
    dispatch(userLogIn(obj));

  //  form.reset()
  };

 
  return (
    <Form  onSubmit={handleSubmit}>
      <LabelWrapper>
        <FormField htmlFor="email">
          <RiMailFill />
          <LabelSpan>Email</LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Email address"
      />

      <LabelWrapper>
        <FormField htmlFor="password">
          <RiLockPasswordFill />
          <LabelSpan>Password</LabelSpan>
        </FormField>
      </LabelWrapper>
      <FieldFormik
        name="password"
        type="password"
        placeholder="Password"
       autoComplete="current-password"
      />
      <StyledButton type="submit">
        <RiLogoutBoxRLine />
        Sign in
      </StyledButton>
    </Form>
  );
};

export default LoginForm;
