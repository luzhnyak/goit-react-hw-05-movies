import { Back } from 'components/Back/Back';
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom/dist';

export const SharedLayout = () => {
  return (
    <div className="container">
      <Header />
      <Back />
      <Outlet />
    </div>
  );
};
