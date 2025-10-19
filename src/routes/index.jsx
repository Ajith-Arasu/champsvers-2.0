import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import LatestWork from '../pages/LatestWork';
import IntroCard from '../pages/introCard';
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroCard />} />
        <Route element={<App />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/latestwork" element={<LatestWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
