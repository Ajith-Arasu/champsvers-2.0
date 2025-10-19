import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.user}>Shishya 🐼</div>
    </div>
  );
};

export default Navbar;
