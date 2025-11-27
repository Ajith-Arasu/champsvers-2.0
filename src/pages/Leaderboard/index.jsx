import React from 'react'
import styles from './style.module.css';
import RectangleButton from '../../components/RectangleButton/RectangleButton';

const LeaderBoard = () => {
  return (
    <div className={styles.leaderpage}>
      <div className={styles.title}>LEADERBOARD</div>
      <div className={styles.leader_code}>
        <form className={styles.leader_form}>
          <div className={styles.leader_button}>
            <div className={styles.first_row}>
              <RectangleButton label="weekly"/>
              <RectangleButton label="Monthly"/>
              <RectangleButton label="yearly"/>
            </div>
            <div className={styles.second_row}>
              <RectangleButton label="Q1"/>
              <RectangleButton label="Q2"/>
              <RectangleButton label="Q3"/>
              <RectangleButton label="Q3"/>
            </div>
          </div>
          <div className={styles.form_layout}>
            <label>SCA JACUARS</label>
            <input style={{ width: "330px" }} type="text" placeholder="33,023 pts" name="currentcode" />
          </div>
          <div className={styles.form_layout}>
            <label>SCA PANTHERS</label>
            <input style={{ width: "250px" }} type="text" name="newcode" />
          </div>
          <div className={styles.form_layout}>
            <label>SCA LEOPARDS</label>
            <input style={{ width: "290px" }} type="text" name="newcode" />
          </div>
          <div className={styles.form_layout}>
            <label>SCA CHEETAHS</label>
            <input style={{ width: "390px" }} type="text" name="newcode" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaderBoard
