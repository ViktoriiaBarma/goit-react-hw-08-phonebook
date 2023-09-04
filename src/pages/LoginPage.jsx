import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div >
        <div >
          <h2 >
            Sign in to your account
          </h2>
        </div>

        <div >
          <LoginForm />

          <p >
            Not a member?{' '}
            <Link
              to="/registr"
              
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;