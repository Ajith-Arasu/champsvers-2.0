import React from 'react'
import styles from './style.module.css';

const QuestListCard = ({onClick, selected, image, titleLine1, titleLine2, description}) => {

  return (
    <div className={`${styles.questcard} ${selected?styles.hidden:""}`} onClick={onClick}>
      <img className={styles.quest_image} src={image} alt="questimage"/>
      <div className={styles.card_details}>
        <div className={styles.card_title}>
          <span>{titleLine1}</span>
          <span>{titleLine2}</span>
        </div>
        <div className={styles.card_description}>{description}</div>
      </div>
    </div>

  )
}

export default QuestListCard
