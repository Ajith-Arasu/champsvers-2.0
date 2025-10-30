import React from 'react';
import styles from './style.module.css';
import clanimg from '../../assets/images/clanimage.png';
import StudentCreations from '../../components/Studentcreations/StudentCreations';

const ClanDetails = () => {
  return (
    <div className={styles.clanspage}>
      <div className={styles.title}>CLAN</div>
      <div className={styles.clandetails}>
        <div className={styles.score_card}>
          <div className={styles.user_activity}>
            <div className={styles.clan_info}>
              <img className={styles.clan_img} src={clanimg} alt="clanimage" />
              <div className={styles.clan_text}>
                <p>SCA</p>
                <span>JAQUARS</span>
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
        <StudentCreations />
      </div>
    </div>

  )
}

export default ClanDetails;
