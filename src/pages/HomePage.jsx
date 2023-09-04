import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Link
        to="/contacts"
      >
        <h1>Let's record your contacts</h1>
      </Link>
    </>
  );
};

export default HomePage;