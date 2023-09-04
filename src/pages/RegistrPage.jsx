import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';

const RegistrPage = () => {
  return (
    <>
      <div >
        <div >
          <h2 style={{
          textAlign: 'center',
              color: 'black',

              fontSize: '36px',
              marginBottom: '10px',
          }}>
            Register an account
          </h2>
        </div>

        <div >
          <RegistrationForm />

          <p style={{
          textAlign: 'center',
              color: 'black',

              fontSize: '16px',
              marginBottom: '10px',
          }}>
            Already have an account?{' '}
            <Link
              to="/login"
              
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegistrPage;