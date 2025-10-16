import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LatestWork from '../pages/LatestWork';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/latestwork" element={<LatestWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
