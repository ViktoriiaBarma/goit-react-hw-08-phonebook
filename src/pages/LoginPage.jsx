import LoginForm from 'components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <div>
        <div>
          <h2
            style={{
              textAlign: 'center',
              color: 'black',

              fontSize: '36px',
              marginBottom: '10px',
            }}
          >
            Sign in to your account
          </h2>
        </div>

        <div>
          <LoginForm />

          <p
            style={{
              textAlign: 'center',
              color: 'black',

              fontSize: '16px',
              marginBottom: '10px',
            }}
          >
            Not a member? <Link to="/registr">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
