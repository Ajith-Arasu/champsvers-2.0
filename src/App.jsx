import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import '../src/global.css';
const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ padding: '20px', flex: 1 }}>
          <Outlet /> {/* ✅ Page content goes here */}
        </div>
      </div>
    </div>
  );
};

export default App;
