import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <div className={styles.userWrapper}>
        <div className={styles.userTrigger}>
          <img src="https://icotar.com/avatar/craig" alt="Avatar" className={styles.avatar} />
          <span className={styles.username}>Shishya</span>
        </div>

        <div className={styles.dropdown}>
          <div className={styles.dropdownItem}>Profile</div>
          <div className={styles.dropdownItem}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
