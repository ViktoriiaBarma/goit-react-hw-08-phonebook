import { Routes, Route } from 'react-router-dom';
import Layout  from '../components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { refreshUser } from 'redux/auth/auth-operations';
import { useAuth } from '../hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivatRoute } from './PrivatRoute';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegistrPage = lazy(() => import('../pages/RegistrPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const NotFound = lazy(() => import('../pages/404Page/404Page'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div
     style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#c9c4cd',
        }}
    > <Loader/>
    </div>
  ) : (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route
          path="contacts"
          element={<PrivatRoute component={ContactsPage} redirectTo="/login" />}
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="registr"
          element={
            <RestrictedRoute component={RegistrPage} redirectTo="/contacts" />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};