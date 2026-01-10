import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';
import AddButton from '../../components/Addbutton/AddButton';
import PageHeader from '../../components/Header/PageHeader';
import axios from 'axios';

const Quests = () =>{ 
  const [quests, setQuests]= useState([]);
  const navigate=useNavigate();
  const handleClick=(id)=>{
    navigate(`/quests/${id}/questcreation`);
  }
   const fetchQuests = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("Access token not found");
        return;
}
      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("/api/v1/contests", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          contest_type: "MICRO_CONTEST",
        
          },

      });
      console.log("API response:", response.data.data);
      setQuests(response.data.data);
    } catch (error) {
      console.error("Error fetching clans:", error);
    }
};

  useEffect(()=>{
    fetchQuests();
   },[]);


  return(
    <div className={styles.questspage}>
      <PageHeader title="QUESTS" dividerwidth="100%">
        <AddButton text="ADD NEW QUEST" onClick={()=>{handleClick(123)}} />
      </PageHeader>
      <div className={styles.quest_gallery}>
        {quests.length > 0 &&
    Array.from({ length: 10 }).map((_, index) => {
      const quest = quests[index % quests.length];

      return (
          <QuestCard
            key={quest.id}
            image="https://d1wlhv1hqb6088.cloudfront.net/0798c554-a13a-412f-8143-33ac804cf088/PAGES/MICRO_CONTESTS/IMAGES/medium/questImgNew.jpg"
            titleLine1={quest.category}
            titleLine2={quest.title}
            description={quest.description}
    />
  );
    })}
</div>
    </div>
  );
 };

export default Quests;
