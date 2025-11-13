import styles from './style.module.css';
import questimg from '../../assets/images/questimg.png';

const QuestCard = () => {
  return (
    <div className={styles.questcard}>
      <img className={styles.quest_image} src={questimg} alt="questimage"/>
      <div className={styles.card_details}>
        <div className={styles.card_title}>
          <span>A BEAUTIFUL</span>
          <span>AQUARIAM</span>
        </div>
        <div className={styles.card_description}>
          Draw a fish tank or bowl that you own or wish to own and explain about the breeds of the fishes inside.
          What food would you feed them? What plants will you plant inside,
          what other things you will keep inside the  to make it a home for all the fishes.</div>
      </div>
    </div>
  );
};

export default QuestCard
