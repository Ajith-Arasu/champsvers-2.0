import { Link } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';

const IntroCard = () => {
  return (
    <div className={styles.background}>
      <div className={styles.overlayBox}>
        <h1 className={styles.title}>
          Schools, <span className={styles.gamified}>Gamified.</span>
        </h1>

        <Link to="/dashboard">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
    </div>
  );
};

export default IntroCard;
