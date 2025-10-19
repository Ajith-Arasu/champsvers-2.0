import styles from './style.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/latest-works">Latest Works</Link>
        </li>
        <li>
          <Link to="/students">Students</Link>
        </li>
        <li>
          <Link to="/clans">Clans</Link>
        </li>
        <li>
          <Link to="/quests">Quests</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>

        <li className={styles.submenu}>
          <span>Activities</span>
          <ul>
            <li>
              <Link to="/activities/comments">Comments</Link>
            </li>
            <li>
              <Link to="/activities/reactions">Reactions</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
