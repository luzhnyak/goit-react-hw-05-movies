import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom/dist';

export const SharedLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};
