import { useNavigate } from "react-router-dom";
import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';
import avatar from '../../assets/images/adminimg.png';
import Hamburger from '../Hamburger/Hamburger';


const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();  
    navigate("/", { replace: true });
};
  return (
    <div className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.userWrapper}>
        <div className={styles.userTrigger}>
          <img src={avatar} alt="Avatar" className={styles.avatar} />
          <span className={styles.username}>Shishya</span>
        </div>
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem}>Profile</div>
          <div className={styles.dropdownItem}
             onClick={handleLogout}
             role="button"
             tabIndex={0}>Logout</div>
        </div>
      </div>
      <Hamburger />
    </div>
  );
};

export default Navbar;
