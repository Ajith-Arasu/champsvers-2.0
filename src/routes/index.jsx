import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';

// Page Components
import Home from '../pages/Home';
import LatestWork from '../pages/LatestWorks';
import Students from '../pages/Students';
import Clans from '../pages/Clans';
import Quests from '../pages/Quests';
import Leaderboard from '../pages/Leaderboard';
import Settings from '../pages/Settings';
import Comments from '../pages/Activities/Comments';
import Reactions from '../pages/Activities/Reactions';
import IntroCard from '../pages/introCard';
import Page404 from '../pages/Page404';
import StudentDetails from '../pages/Students/studentdetails';
import StudentProfile from '../pages/Students/studentprofile';
import ClanDetails from '../pages/Clans/clandetails';
import AddClan from '../pages/Clans/addclan';
import QuestCreation from '../pages/Quests/questcreation';
import QuestBookPage from '../pages/Quests/questbook';
import QuestBookList from '../pages/Quests/questbooklist';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<IntroCard />} />

        {/* Authenticated or main app layout routes */}
        <Route element={<App />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/latestwork" element={<LatestWork />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id/details" element={<StudentDetails />} />
          <Route path="/students/:id/profile" element={<StudentProfile />} />
          <Route path="/clans" element={<Clans />} />
          <Route path="/clans/:id/details" element={<ClanDetails />} />
          <Route path="/clans/:id/addclan" element={<AddClan />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/quests/:id/questcreation" element={<QuestCreation />} />
          <Route path="/questbook" element={<QuestBookList />} />
          <Route path="/questbook/create" element={<QuestBookPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/activities/comments" element={<Comments />} />
          <Route path="/activities/reactions" element={<Reactions />} />
        </Route>

        {/* 404 Fallback Route */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
