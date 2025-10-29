import React from 'react';
import styles from './styles.module.css';
import StudentCreations from '../../components/Studentcreations/StudentCreations';

const LatestWork = () => {
  return (
    <div className={styles.latestwork}>
      <div className={styles.title}>Latest Works</div>
      <div className={styles.works_gallery}>
        <StudentCreations />
        <StudentCreations />
        <StudentCreations />
      </div>
    </div>
  )
};

export default LatestWork;
