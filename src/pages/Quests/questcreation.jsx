import React from 'react'
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';
import Button from '../../components/Button/Button';

const QuestCreation = () => {
  return (
    <div className={styles.questspage}>
      <div className={styles.title}>QUESTS</div>
      <div className={styles.quest_creation}>
        <form>
          <div className={styles.quest_details}>
            <div className={styles.form_group}>
              <label>TITLE</label>
              <input type="text" name="title" placeholder="A BEAUTIFUL AQUARIUM"></input>
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea type="text" rows="9" cols="30" name="description" 
              placeholder="Draw a fish tank or bowl that you own or wish to own and explain about the breeds of the fishes inside. What food would you feed them? What plants will you plant inside, what other things you will keep inside the to make it a home for all the fishes."></textarea>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>POINTS<span>(30 TO 200)</span></label>
              <input type="text" name="points" placeholder="120"></input>
            </div>
            <div className={styles.form_group}>
              <label>CATEGORY</label>
              <input placeholder="ANIMALS"></input>
            </div>
            <div className={styles.form_group}>
              <label>TAGS</label>
              <input type="text" name="tags" placeholder="PETS, NATURE, ANIMALS, FISHES"></input>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>AGE<span>(4 TO 18/ALL)</span></label>
              <input type="text" name="age" placeholder="PETS, NATURE, ANIMALS, FISHES"></input>
            </div>
          </div>
          <div className={styles.form_button}>
            <Button label="SAVE QUEST" /> 
          </div>
        </form>
        <div className={styles.quest_preview}>
          <p className={styles.text_preview}>PREVIEW</p>
          <div className="quest_card">
            <QuestCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCreation
