import { NavLink } from 'react-router-dom';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import styles from './style.module.css';

const Sidebar = () => {
  return (
    <> 
      <div className={styles.overlay}></div>
      <div className={styles.sidebar}>
        <ul className={styles.menu}>
          <li>
            <NavLink to="/dashboard" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              <CircleRoundedIcon
                sx={{
                  fontSize: 8,      
                  mr: 1,
                  flexShrink: 0,
                }} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/latestwork" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              <CircleRoundedIcon
                sx={{
                  fontSize: 8,      
                  mr: 1,
                  flexShrink: 0,
                }} />Latest Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              <CircleRoundedIcon
                sx={{
                  fontSize: 8,      
                  mr: 1,
                  flexShrink: 0,
                }} />Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/clans" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              <CircleRoundedIcon
                sx={{
                  fontSize: 8,      
                  mr: 1,
                  flexShrink: 0,
                }} />Clans
            </NavLink>
          </li>
          <li>
            <NavLink to="/quests" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              <CircleRoundedIcon
                sx={{
                  fontSize: 8,      
                  mr: 1,
                  flexShrink: 0,
                }} />Quests
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              <CircleRoundedIcon
                sx={{
                  fontSize: 8,      
                  mr: 1,
                  flexShrink: 0,
                }} />Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>
              <CircleRoundedIcon
                sx={{
                  fontSize: 8,      
                  mr: 1,
                  flexShrink: 0,
                }} />Settings
            </NavLink>
          </li>
          <li className={styles.submenu}>
            <CircleRoundedIcon
              sx={{
                fontSize: 8,      
                mr: 1,
                flexShrink: 0,
              }} />Activities
            <ul>
              <li>
                <NavLink
                  to="/activities/comments"
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  <CircleRoundedIcon
                    sx={{
                      fontSize: 8,      
                      mr: 1,
                      flexShrink: 0,
                      }} />Comments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/activities/reactions"
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  <CircleRoundedIcon
                    sx={{
                      fontSize: 8,      
                      mr: 1,
                      flexShrink: 0,
                    }} />Reactions
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
