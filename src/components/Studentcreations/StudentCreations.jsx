import React from 'react';
import styles from './style.module.css';

const StudentCreations = (width, height, image) => {
  return (
    <div className={styles.student_creations}>
      <img style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain',
        borderRadius: '30px'
      }} src={image} alt="latest works"/>
    </div>
  )
}

export default StudentCreations
