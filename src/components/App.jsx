import { Routes, Route } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import PublicRoute from '../components/PublicRoute/PublicRoute';
import { Text, Center } from '@chakra-ui/react';
import RegisterView from '../views/RegisterView/RegisterView';
import LoginView from '../views/LoginView/LoginView';
import ContactsView from '../views/ContactsView/ContactsView';
import AppBar from './AppBar/AppBar';
import HomeView from '../views/HomeView/HomeView';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/auth-operations';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );
  console.log('isFetchingCurrentUser', isFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AppBar />
      {!isFetchingCurrentUser ? (
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route element={<PublicRoute />}>
              <Route path="register" element={<RegisterView />} restricted />
            </Route>
            <Route element={<PublicRoute />}>
              <Route path="login" element={<LoginView />} restricted />
            </Route>

            <Route element={<ProtectedRoute />}>
              <Route path="contacts" element={<ContactsView />} />
            </Route>
          </Routes>
        </Suspense>
      ) : (
        <Center>
          <Text color="gray.500" my="auto">
          Nothing to show
          </Text>
        </Center>
        
      )}
    </>
  );
};

export default App;
