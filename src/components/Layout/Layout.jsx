import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Header } from './Layout.styled';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer autoClose={3000} position="bottom-right" />
      </Container>
    </>
  );
};

export default Layout;
