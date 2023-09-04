import { Link } from 'react-router-dom';
import { Title } from './HomePage.sryled';

const HomePage = () => {
  return (
    <>
      <Link
        to="/contacts"
      >
        <Title>Let's record your contacts</Title>
      </Link>
    </>
  );
};

export default HomePage;