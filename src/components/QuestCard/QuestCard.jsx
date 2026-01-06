import styles from './style.module.css';


const QuestCard = ({ image, titleLine1, titleLine2, description }) => {
  return (
    <div className={styles.questcard}>
      <img className={styles.quest_image} src={image} alt="questimage"/>
      <div className={styles.card_details}>
        <div className={styles.card_title}>
          <span>{titleLine1}</span>
          <span>{titleLine2}</span>
        </div>
        <div className={styles.card_description}>
          {description}</div>
      </div>
    </div>
  );
};

export default QuestCard
