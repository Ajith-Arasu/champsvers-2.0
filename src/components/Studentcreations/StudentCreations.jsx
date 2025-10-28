import React from 'react';
import styles from './style.module.css';
import img1 from '../../assets/images/image1.png';
import img2 from '../../assets/images/image2.png';
import img3 from '../../assets/images/image3.png';
import img4 from '../../assets/images/image4.png';
import img5 from '../../assets/images/image5.png';
import img6 from '../../assets/images/image6.png';

const StudentCreations = () => {
  return (
    <div className={styles.student_creations}>
      <img className={styles.imagegallery} src={img1} alt="studentcreationimage" />
      <img className={styles.imagegallery} src={img2} alt="studentcreationimage" />
      <img className={styles.imagegallery} src={img3} alt="studentcreationimage" />
      <img className={styles.imagegallery} src={img4} alt="studentcreationimage" />
      <img className={styles.imagegallery} src={img5} alt="studentcreationimage" />
      <img className={styles.imagegallery} src={img6} alt="studentcreationimage" />
    </div>
  )
}

export default StudentCreations
