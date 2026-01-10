import React from 'react'
import { useState } from 'react';
import styles from './style.module.css';
import img1 from '../../assets/images/scapanthers.png';
import ClanCard from '../../components/Card/ClanCard';
import Button from '../../components/Button/Button';
import axios from 'axios';

const AddClan = () => {
  const [formData, setFormData] = useState({
  clanName: '',
  clanCode: '',
  maxLimit: '',
  description: '',
  pictureUrl: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handleSubmit = async () => {
  try {
    const response = await axios.post(
      'https://your-api-url/clans',
      {
        clan_name: formData.clanName,
        clan_code: formData.clanCode,
        max_limit: formData.maxLimit,
        description: formData.description,
        image_url: formData.pictureUrl
      }
    );

    console.log('Clan created:', response.data);
    alert('Clan created successfully!');
  } catch (error) {
    console.error('Error creating clan:', error);
    alert('Failed to create clan');
  }
};


  return (
    <div className={styles.addclanpage}>
      <div className={styles.title}>NEW CLAN</div>
      <div className={styles.clan_new}>
        <form>
          <div className={styles.clan_details}>
            <div className={styles.form_group}>
              <label>CLAN NAME</label>
              <input 
              type="text"
              name="clanName"
              value={formData.clanName}
              onChange={handleChange}
              placeholder="SCA JAGUARS"></input>
            </div>
            <div className={styles.form_group}>
              <label>CLAN CODE</label>
              <input
               type="tex"
               name="clanCode"
               value={formData.clanCode}
               onChange={handleChange}
               placeholder="SCA JAGUARS"></input>
            </div>
            <div className={styles.form_group}>
              <label>MAX LIMIT</label>
              <input 
              type="text"
              name="maxLimit"
              value={formData.maxLimit}
              onChange={handleChange}
              placeholder="500"></input>
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea cols="30" rows="8"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="ENTER SOMETHING ABOUT THE STUDENT(OPTIONAL)"></textarea>
            </div>
            <div className={styles.form_group}>
              <label>PICTURE-URL</label>
              <input
              type="text"
              name="pictureUrl"
              value={formData.pictureUrl}
              onChange={handleChange}
              placeholder="500"></input>
            </div>
          </div>
        </form>
        <div className="clan_card">
          <ClanCard image={img1} label="SCA PANTHERS" value="302"/>
          {/*<ClanCard 
            image={formData.pictureUrl || img1} 
            label={formData.clanName || "PREVIEW NAME"} 
            value={formData.maxLimit || "0"}
          />*/}
        </div>
      </div>
      <div className={styles.form_button}>
        <Button label="save" onClick={handleSubmit}/>
      </div>
    </div>
  );
};

export default AddClan
