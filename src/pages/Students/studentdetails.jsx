import styles from './style.module.css';
import userimg from '../../assets/images/Boy.png';
import StudentCreations from '../../components/Studentcreations/StudentCreations';
import InfoBlock from '../../components/InfoBlock/InfoBlock';

const StudentDetails = () => {
  return( 
    <div className={styles.studentspage}>
      <div className={styles.title}>Students</div>
      <div className={styles.studentdetails}>
        <div className={styles.score_card}>
          <div className={styles.user_activity}>
            <div className={styles.user_info}>
              <img className={styles.user_image} src={userimg} alt="userimage"></img>
              <div className={styles.student_info}>
                <p>Billy joe</p>
                <p>10 YEARS OLD, grade 5</p>
                <p>SCA PANTHERS</p>
              </div>
            </div>
            <div className={styles.activity_panel}>
              <p>Activity   : 3445</p>
              <p>Popularity  : 3445</p>
              <p>Activity   : 3445</p>
              <p>Activity   : 3445</p>
            </div>
          </div>
          <div className={styles.reward_badge}>
            <div className={styles.coins}>
              <div className={styles.coin_circle}></div>
              <div className={styles.coins_collection}>
                <div className={styles.coin_tiles}>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                </div>
                <span className={styles.coins_label}>COINS EARNED</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.talent_showcase}>
          <InfoBlock value="315" label="QUESTS" />
          <InfoBlock value="730" label="ARTS" />
          <InfoBlock value="34" label="BOOKS" />
          <InfoBlock value="20" label="MUSIC" />
          <InfoBlock value="23" label="ACHIEVEMENTS" />
          <InfoBlock value="16" label="SPORTS" />
          <InfoBlock value="16" label="AWARDS" />
          <InfoBlock value="16" label="QUIZES" />
          <InfoBlock value="26" label="COLLECTIONS" />
          <InfoBlock value="18" label="TROPHIES" />
        </div>
        <StudentCreations/>
      </div>
    </div>
  );
};

export default StudentDetails;
