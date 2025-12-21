import React from 'react';
import styles from './style.module.css';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';

const Settings = () => {
  return(
    <div className={styles.settingspage}>
      <PageHeader title="SETTINGS | CHANGE CODE" dividerwidth="100%" />
      <div className={styles.settings_code}>
        <form className={styles.settings_form}>
          <div className={styles.form_layout}>
            <label>CURRENT CODE</label>
            <input type="text" placeholder="ABCD-353-FRSD" name="currentcode" />
          </div>
          <div className={styles.form_layout}>
            <label>NEW CODE</label>
            <input type="text" placeholder="FLXE-999-FDFG" name="newcode" />
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
