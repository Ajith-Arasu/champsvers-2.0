import React from 'react';
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';

const Quests = () =>{ 
  return(
    <div className={styles.questspage}>
      <div className={styles.title}>QUESTS</div>
      <div className={styles.quest_gallery}>
        <QuestCard />    
        <QuestCard />
        <QuestCard />
        <QuestCard />
        <QuestCard /> 
        <QuestCard />    
        <QuestCard />
        <QuestCard />
        <QuestCard />
        <QuestCard /> 
      </div>
    </div>
  );
 };

export default Quests;
