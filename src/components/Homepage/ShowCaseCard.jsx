import React from 'react';
import styles from './style.module.css';

const ShowCaseCard = (props) => {
  return (
    <div className={styles.showcase_card}>
      <p className={styles.card_value}>{props.value}</p>
      <span className={styles.card_text}>{props.text}</span>
    </div>
  )
}

export default ShowCaseCard
