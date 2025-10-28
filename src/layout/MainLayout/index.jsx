import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Home from '../../pages/Home';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Home />
      <div style={{ flex: 1 }}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
