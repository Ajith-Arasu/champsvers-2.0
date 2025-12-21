import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../../assets/images/Menu.png';
import styles from './style.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prev => !prev);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  const toggleActivities = () => {
    setActivitiesOpen(prev => !prev);
  };

  return (
    <>
      <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
        <img src={menu} alt="Menu" />
      </button>
      {open && (
        <div className={styles.mobilesidebar}>
          <CloseIcon className={styles.close_btn} onClick={closeMenu} />
          <nav className={styles.mobileMenu}>
            <NavLink
              to="/dashboard"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Home
            </NavLink>
            <NavLink
              to="/latestwork"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Latest Works
            </NavLink>

            <NavLink
              to="/students"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Students
            </NavLink>

            <NavLink
              to="/clans"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Clans
            </NavLink>
            <NavLink
              to="/quests"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Quests
            </NavLink>

            <NavLink
              to="/leaderboard"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Leaderboard
            </NavLink>

            <NavLink
              to="/settings"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              Settings
            </NavLink>
            {/* Activities dropdown at the bottom */}
            <div className={styles.submenuHeader} onClick={toggleActivities}>
              <span>Activities</span>
              {activitiesOpen ? (
                <ExpandLessIcon className={styles.dropdownIcon} />
              ) : (
                <ExpandMoreIcon className={styles.dropdownIcon} />
              )}
            </div>
            {activitiesOpen && (
              <div className={styles.submenuLinks}>
                <NavLink
                  to="/activities/comments"
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  Comments
                </NavLink>
                <NavLink
                  to="/activities/reactions"
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  Reactions
                </NavLink>
              </div>
            )}
          </nav>
        </div>
      )}
    </>
  );
};
export default HamburgerMenu
