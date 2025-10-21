import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/latestwork" className={({ isActive }) => (isActive ? styles.active : '')}>
            Latest Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => (isActive ? styles.active : '')}>
            Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/clans" className={({ isActive }) => (isActive ? styles.active : '')}>
            Clans
          </NavLink>
        </li>
        <li>
          <NavLink to="/quests" className={({ isActive }) => (isActive ? styles.active : '')}>
            Quests
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? styles.active : '')}>
            Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : '')}>
            Settings
          </NavLink>
        </li>

        <li className={styles.submenu}>
          <span>Activities</span>
          <ul>
            <li>
              <NavLink
                to="/activities/comments"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Comments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/activities/reactions"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Reactions
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
