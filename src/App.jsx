import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

const App = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight:'100vh'}}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', margin: '1rem', gap: '1rem' }}>
        <Sidebar />
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(129, 130, 134, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%)',
            width: '100%',
            borderRadius: '2rem',
            padding: isMobile ? '0.5rem' : '1rem',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
