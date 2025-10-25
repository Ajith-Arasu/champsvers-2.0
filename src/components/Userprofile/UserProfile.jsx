import React from 'react'
import styles from './style.module.css';
import userimg from '../../assets/images/Boy.png';
import SquareDots from '../Squaredots/SquareDots';

const UserProfile = () => {
  return (
    <div className={styles.student_profile}>
      <div className={styles.profile_menu}>
        <SquareDots/>
      </div>
      <div className={styles.profile_details}>
        <div className={styles.user_profile}>
          <img className={styles.user_image} src={userimg} alt="userimage"></img>
          <div className={styles.user_info}>
            <p className={styles.user_name}>BILLY JOE</p>
            <span className={styles.user_tag}>@ Billy</span>
            <p className={styles.activity_score}>ACTIVITY SCORE:3445</p>
          </div>
        </div>
      </div>
      <div className={styles.student_details}>
        <div className={styles.student_info}>
          <div className={styles.info_box}>
            <p className={styles.info_value}>30</p>
            <span className={styles.info_label}>Age</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>B</p>
            <span className={styles.info_label}>GRADE</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>SCA PANTHERS</p>
            <span className={styles.info_label}>CLAN</span>
          </div>
        </div>
        <div className={styles.student_skill}>
          <p className={styles.skill_text}>
            I am a master of creativity and sports. Im interested in football and pencil arts
          </p>
        </div>
      </div>
      <div className={styles.view_btn}>
        <p className={styles.viewtext}>View Details</p>
      </div>
    </div>
  );
};

export default UserProfile
