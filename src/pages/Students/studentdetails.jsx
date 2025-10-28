import styles from './style.module.css';
import userimg from '../../assets/images/Boy.png';
import img1 from '../../assets/images/image1.png';
import img2 from '../../assets/images/image2.png';
import img3 from '../../assets/images/image3.png';
import img4 from '../../assets/images/image4.png';
import img5 from '../../assets/images/image5.png';
import img6 from '../../assets/images/image6.png';

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
          <div className={styles.info_box}>
            <p className={styles.info_value}>315</p>
            <span className={styles.info_label}>QUESTS</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>730</p>
            <span className={styles.info_label}>ARTS</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>34</p>
            <span className={styles.info_label}>BOOKS</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>20</p>
            <span className={styles.info_label}>MUSIC</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>23</p>
            <span className={styles.info_label}>ACHIEVEMENTS</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>16</p>
            <span className={styles.info_label}>SPORTS</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>16</p>
            <span className={styles.info_label}>AWARDS</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>16</p>
            <span className={styles.info_label}>QUIZES</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>26</p>
            <span className={styles.info_label}>COLLECTIONS</span>
          </div>
          <div className={styles.info_box}>
            <p className={styles.info_value}>18</p>
            <span className={styles.info_label}>TROPHIES</span>
          </div> 
        </div>
        <div className={styles.student_creations}>
          <img className={styles.imagegallery} src={img1} alt="studentcreationimage" />
          <img className={styles.imagegallery} src={img2} alt="studentcreationimage" />
          <img className={styles.imagegallery} src={img3} alt="studentcreationimage" />
          <img className={styles.imagegallery} src={img4} alt="studentcreationimage" />
          <img className={styles.imagegallery} src={img5} alt="studentcreationimage" />
          <img className={styles.imagegallery} src={img6} alt="studentcreationimage" />
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
