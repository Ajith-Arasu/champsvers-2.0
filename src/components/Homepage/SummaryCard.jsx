import React from 'react';
import styles from './style.module.css';

const SummaryCard = (props) => {
  return (
    <div className={styles.summarycard}>
      <span className={styles.card_value}>{props.value}</span>
      <span className={styles.card_text} style={{color: props.color}}>{props.text}</span>
    </div>
  )
}

export default SummaryCard
