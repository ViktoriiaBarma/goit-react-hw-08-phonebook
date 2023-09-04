import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Link
        to="/contacts"
      >
        <h1>Add your contacts</h1>
      </Link>
    </>
  );
};

export default HomePage;