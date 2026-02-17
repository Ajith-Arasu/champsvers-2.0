import React from 'react'
import { useState } from 'react';
import styles from './style.module.css';
import img1 from '../../assets/images/scapanthers.png';
import ClanCard from '../../components/Card/ClanCard';
import Button from '../../components/Button/Button';
import axios from 'axios';

const AddClan = () => {
  const [formData, setFormData] = useState({
    clan_name: '',
    clan_description: '',
    pictureUrl: '',
    clanCode: '', 
    maxLimit: ''
}
);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
};

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    console.log('formdata:', formData);
    const payload = { 
      clan_name: formData.clan_name,
      clan_description: formData.clan_description,
      clan_cover: { name: formData.pictureUrl || 'ClanAvatar2.png', defaultCover: true },
      clan_coins: 0,
      clan_members_count: 0,
      clan_code: formData.clanCode,
      max_limit: parseInt(formData.maxLimit, 10) || 0
 };
 
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error('Access token not found');
        return;
      }
      const response = await axios.post(
        'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev/api/v1/clans',
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
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
                name="clan_name"
                value={formData.clan_name}
                onChange={handleChange}
                placeholder="SCA JAGUARS" />
            </div>
            <div className={styles.form_group}>
              <label>CLAN CODE</label>
              <input
                type="text"
                name="clanCode"
                value={formData.clanCode}
                onChange={handleChange}
                placeholder="SCA JAGUARS" />
            </div>
            <div className={styles.form_group}>
              <label>MAX LIMIT</label>
              <input 
                type="number"
                name="maxLimit"
                value={formData.maxLimit}
                onChange={handleChange}
                placeholder="500" />
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea cols="30" rows="8"
                name="clan_description"
                value={formData.clan_description}
                onChange={handleChange}
                placeholder="ENTER SOMETHING ABOUT THE STUDENT(OPTIONAL)" />
            </div>
            <div className={styles.form_group}>
              <label>PICTURE-URL</label>
              <input
                type="text"       
                name="pictureUrl"
                value={formData.pictureUrl}
                onChange={handleChange}
                placeholder="ClanAvatar2.png" />
            </div>
          </div>
        </form>
        <div className="clan_card">
          <ClanCard image={img1} label={formData.clan_name || 'CLAN PREVIEW'} value="302"/>
        </div>
      </div>
      <div className={styles.form_button}>
        <Button label="save" type="submit" onClick={handleSubmit}/>
      </div>
    </div>
  );
};

export default AddClan
