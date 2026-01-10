import React from 'react';
import { useState } from 'react';
import styles from './style.module.css';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';
import axios from 'axios';

const Settings = () => {
  const [formData, setFormData] = useState({
    currentCode: '',
    newCode: ''
  });
  
  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://your-api-url/change-code',
        {
          current_code: formData.currentCode,
          new_code: formData.newCode
        }
      );

      console.log('Code updated:', response.data);
      alert('Code updated successfully!');
    } catch (error) {
      console.error('Error updating code:', error);
      alert('Failed to update code');
    }
  };

  return(
    <div className={styles.settingspage}>
      <PageHeader title="SETTINGS | CHANGE CODE" dividerwidth="100%" />
      <div className={styles.settings_code}>
        <form className={styles.settings_form}>
          <div className={styles.form_layout}>
            <label>CURRENT CODE</label>
            <input
              type="text"
              placeholder="ABCD-353-FRSD"
              name="currentcode"
              value={formData.currentCode}
              onChange={handleChange} />
          </div>
          <div className={styles.form_layout}>
            <label>NEW CODE</label>
            <input
              type="text"
              placeholder="FLXE-999-FDFG"
              value={formData.newCode}
              onChange={handleChange}
              name="newcode" />
          </div>
          <div className={styles.form_button}>
            <Button label="SAVE"/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Settings;
