import React from 'react';
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';
import AddButton from '../../components/Addbutton/AddButton';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/Header/PageHeader';

const Quests = () =>{ 
  const navigate=useNavigate();
  const handleClick=(id)=>{
    navigate(`/quests/${id}/questcreation`);
  }
  return(
    <div className={styles.questspage}>
      <PageHeader title="QUESTS" dividerwidth="100%">
       <AddButton text="ADD NEW QUEST" onClick={()=>{handleClick(123)}} />
      </PageHeader>
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
