import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';

const RegistrPage = () => {
  return (
    <>
      <div >
        <div >
          <h2 >
            Register an account
          </h2>
        </div>

        <div >
          <RegistrationForm />

          <p >
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