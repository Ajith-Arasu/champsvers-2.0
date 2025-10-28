import React from 'react'
import styles from './infoblock.css';

const InfoBlock = (value, label) => {
  return (
    <div className={styles.info_box}>
      <p className={styles.info_value}>{value}</p>
      <span className={styles.info_label}>{label}</span>
    </div>
  )
}

export default InfoBlock

