import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <> 
      <div className={styles.overlay}></div>
    
      <div className={styles.sidebar}>
       <ul className={styles.menu}>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.bullet}></span>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/latestwork" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.bullet}></span>Latest Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/students" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.bullet}></span>Students
          </NavLink>
        </li>
        <li>
          <NavLink to="/clans" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.bullet}></span>Clans
          </NavLink>
        </li>
        <li>
          <NavLink to="/quests" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.bullet}></span>Quests
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.bullet}></span>Leaderboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? styles.active : '')}>
            <span className={styles.bullet}></span>Settings
          </NavLink>
        </li>

        <li className={styles.submenu}>
          <span><span className={styles.bullet}></span>Activities</span>
          <ul>
            <li>
              <NavLink
                to="/activities/comments"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                <span className={styles.bullet}></span>Comments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/activities/reactions"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                <span className={styles.bullet}></span>Reactions
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
