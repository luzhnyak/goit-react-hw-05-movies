import { Container } from 'components/App.styled';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom/dist';

export const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
