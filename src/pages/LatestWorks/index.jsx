import React from 'react';
import styles from './styles.module.css';
import StudentCreations from '../../components/Studentcreations/StudentCreations';
import toggleimg from '../../assets/images/tooggleimg.png';
import PageHeader from '../../components/Header/PageHeader';

const LatestWork = () => {
  return (
    <div className={styles.latestwork}>
      <PageHeader title="LATEST WORK" dividerWidth="100%" >
      <div className={styles.title_group}>
        <div className={styles.togglebtn_group}>
            <button className={styles.toggle_btn}>ARTS</button>
            <button className={styles.toggle_btn}>BOOKS</button>
            <button className={styles.toggle_btn}>MUSIC</button>
            <button className={styles.toggle_btn}>PROJECTS</button>
          </div>
        
        <img src={toggleimg} className={styles.toggle_img} alt='toggleimage'/>
        </div>
        </PageHeader>
      <div className={styles.works_gallery}>
        <StudentCreations />
        <StudentCreations />
        <StudentCreations />
      </div>
    </div>
  )
};

export default LatestWork;
