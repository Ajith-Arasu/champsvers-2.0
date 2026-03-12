import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import AddButton from '../../components/Addbutton/AddButton';
import PageHeader from '../../components/Header/PageHeader';
import axios from 'axios';
import QuestListCard from '../../components/QuestListCard/QuestListCard';

const Quests = () =>{ 
  const [quests, setQuests]= useState([]);
  const [loading, setLoading] = useState(false);

  const navigate=useNavigate();
  const handleClick=(id)=>{
    navigate(`/quests/${id}/questcreation`);
  }
  const fetchQuests = async () => {
    try {
      setLoading(true);
      const text_token= localStorage.getItem("access_token");
      if (!text_token) {
        console.error("Access token not found");
        return;
}
      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("/api/v1/contests", {
        headers: {
          Authorization: `Bearer ${text_token}`, 
        },
        params: {
          contest_type: "MICRO_CONTEST",
        },
      });
      console.log("API response:", response.data.data);
      setQuests(response.data.data);
    } catch (error) {
      console.error("Error fetching clans:", error);
    }finally{
      setLoading(false);
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
        {loading ? (<p className={styles.loadingtext}>Loading Quests...</p>): quests.length > 0 ?(
          quests.map((quest) => {  
            return (
              <QuestListCard  
                key={quest.contest_id}
                image={`https://d1wlhv1hqb6088.cloudfront.net/0798c554-a13a-412f-8143-33ac804cf088/PAGES/MICRO_CONTESTS/IMAGES/medium/${quest.cr_banner}`}
                titleLine1={quest.category}
                titleLine2={quest.title}
                description={quest.description} 
              />
            );
          })):(<p className={styles.loadingtext}>No Quests found</p>)}
      </div>
    </div>
  );
 };

export default Quests;
