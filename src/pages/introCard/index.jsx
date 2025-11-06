import { Link } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/cvlogo.png';
import Button from '../../components/Button/Button';

const IntroCard = () => {
  return (
    <div className={styles.background}>
      <div className={styles.introcard}>
        <div className={styles.overlayBox}>
          <h1 className={styles.title}>
            Schools, <br/>
            <span className={styles.gamified}>Gamified.</span>
          </h1>
          <Link to="/dashboard">
            <img src={logo} alt="Logo" className={styles.logo} />
          </Link>
        </div>
      </div>
      <div className={styles.login}>
        <div className={styles.login_title}>
          <div className={styles.text}>Sign in</div>
          <div className={styles.desc}>To manage your school dashboard</div>
          <div className={styles.login_form}>
            <input type="text" placeholder="USERID" />
            <input type="text" placeholder="PASSWORD" />
            <Button label="Continue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
