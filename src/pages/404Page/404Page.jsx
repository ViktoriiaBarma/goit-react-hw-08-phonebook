import { Link } from 'react-router-dom';
import { PageNf, Wrap } from './404Page.styled';

const NotFound = () => {
  return (
    <>
      <div>
        <PageNf>
          <Wrap>
            <h1>404</h1>
            <p>Page not found...</p>
            <Link to="/">Go back home</Link>
          </Wrap>
        </PageNf>
      </div>
    </>
  );
};

export default NotFound;
