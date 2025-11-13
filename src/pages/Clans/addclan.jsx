import React from 'react'
import styles from './style.module.css';
import img1 from '../../assets/images/scapanthers.png';
import ClanCard from '../../components/Card/ClanCard';
import Button from '../../components/Button/Button';

const AddClan = () => {
  return (
    <div className={styles.addclanpage}>
      <div className={styles.title}>NEW CLAN</div>
      <div className={styles.clan_new}>
        <form>
          <div className={styles.clan_details}>
            <div className={styles.form_group}>
              <label>CLAN NAME</label>
              <input type="text" name="clanname" placeholder="SCA JAGUARS"></input>
            </div>
            <div className={styles.form_group}>
              <label>CLAN CODE</label>
              <input type="tex" name="clancode" placeholder="SCA JAGUARS"></input>
            </div>
            <div className={styles.form_group}>
              <label>MAX LIMIT</label>
              <input type="text" name="maxlimit" placeholder="500"></input>
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea cols="30" rows="8" placeholder="ENTER SOMETHING ABOUT THE STUDENT(OPTIONAL)"></textarea>
            </div>
            <div className={styles.form_group}>
              <label>PICTURE-URL</label>
              <input type="text" name="pictureurl" placeholder="500"></input>
            </div>
          </div>
        </form>
        <div className="clan_card">
          <ClanCard image={img1} label="SCA PANTHERS" value="302"/>
        </div>
      </div>
      <div className={styles.form_button}>
        <Button label="save"/>
      </div>
    </div>
  );
};

export default AddClan
