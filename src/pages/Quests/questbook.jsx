import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';
import QuestListCard from '../../components/QuestListCard/QuestListCard';

const QuestBookPage = () => {
  const initialQuestState = {
    title: '',
    desc: '',
    points: '',
    difficulty_level: '',
    category: '',
    tags: [],
    l_age: '',
    h_age: ''
};

  const [questData, setQuestData] = useState(initialQuestState);
  const [bannerKey, setBannerKey] = useState('');
  const [uploadData, setUploadData] = useState(null);
  const [quests, setQuests] = useState([]);
  const [questId, setQuestId] = useState([]);
  const [fileExtension, setFileExtension] = useState('');
  const [questError, setQuestError] = useState('');
  
  const handleClick = (id)=>{
    console.log('IDs:',id);
    setQuestId((prev)=>{
     const updatedQuestId = [...prev, id];
      console.log("QuestIDs:",updatedQuestId);
       return updatedQuestId;
    });
  }
 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuestData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const questAPI = async (fileExtension) => {
    try {
      const text_token = localStorage.getItem('access_token');
      if (!text_token) {
        console.error('Access token not found');
        return;
      }
      const api = axios.create({
        baseURL: 'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev'
      });
      const response = await api.get('api/v1/s3/upload-url', {
        headers: {
          Authorization: `Bearer ${text_token}`
        },
        params: {
          upload_sub_type: 'QUEST_BOOKS',
          type: 'IMAGES',
          extension: fileExtension,
          upload_type: 'PAGES'
        }
      });
      const upLoadurl = response.data.data;
      console.log('Uploadurl:', upLoadurl);
      setUploadData(upLoadurl);
      setBannerKey(upLoadurl.keyName);
    } catch (error) {
      console.error('Error fetching upload URL:', error);
    }
  };

   //Quest collection
  useEffect(()=>{
    const fetchQuests = async()=>{
      try{
        const text_token=localStorage.getItem("access_token");
        if(!text_token){
          console.error("Access token not found");
          return;
        }
        const api=axios.create({
         baseURL:"https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
      });
        const getresponse = await api.get("/api/v1/contests",{
          headers:{
            Authorization:`Bearer ${text_token}`,
         },
          params:{
            contest_type:"MICRO_CONTEST",
          },
        })
       console.log('API Response:', getresponse.data.data);
      setQuests(getresponse.data.data);
      }catch (error){
        console.error("Error fetching Quests", error);
  }
  };
   fetchQuests();
  },[]);
 


  useEffect(() => {
    if(fileExtension){
      questAPI(fileExtension);}
      }, [fileExtension]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bannerKey) {
      alert('Submission Blocked. Banner is missing');
      return;
    }

    if(questId.length === 0){
      setQuestError('please select at least one quest');
      return;
    }else if(questId.length >10){
      setQuestError('Not more than 10 quest selection')
      return;
    }
    setQuestError("");

    const payload={
      title: questData.title,
      desc: questData.desc,
      qb_cover: bannerKey,
      q_ids:questId,
    };

    console.log('QuestBook:',payload);
     try {
      const text_token = localStorage.getItem('access_token');
      if (!text_token) {
        console.error('Access token not found');
        return;
      }
      const postResponse = await axios.post(
        'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev/api/v1/quest-book',
        payload,
        {
          headers: {
            Authorization: `Bearer ${text_token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      if (postResponse.status === 200) {
        alert('Quest book created successfully!');
        setQuestData(initialQuestState);
      }
    } catch (error) {
      if (error.response?.status === 403) {
        alert("Permission Denied: You don't have rights to create a quest book.");
      }
    }
  };

  return (
    <div className={styles.questspage}>
      <PageHeader title="QUEST BOOK" dividerwidth="100%" />
      <div className={styles.quest_creation}>
        <form onSubmit={handleSubmit}>
          <div className={styles.quest_details}>
            <div className={styles.form_group}>
              <label>TITLE</label>
              <input type="text" name="title" value={questData.title} onChange={handleChange} required />
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea
                type="text"
                rows="7"
                cols="30"
                name="desc"
                value={questData.desc}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.form_button}>
              <Button label="SAVE" />
            </div>

            {/*Quest collection*/}
            <p className={styles.display}>QUESTS</p>
            <div className={styles.quest_gallery}>
              {quests.length>0 &&
                quests.map((quest)=>{
                  return(
                    <QuestListCard onClick={()=>{handleClick(quest.contest_id)}}
                      selected={questId.includes(quest.contest_id)}
                      key={quest.contest_id}
                      image={`https://d1wlhv1hqb6088.cloudfront.net/0798c554-a13a-412f-8143-33ac804cf088/PAGES/MICRO_CONTESTS/IMAGES/medium/${quest.cr_banner}`}
                      titleLine1={quest.category}
                      titleLine2={quest.title}
                      description={quest.description}/>
                    )
              })}
            </div>
              {questError && <p className={styles.display}>{questError}</p>}
          </div>
        </form>
        <div className={styles.quest_preview}>
          <p className={styles.text_preview}>PREVIEW</p>
          <div className="quest_card">
            <QuestCard uploadData={uploadData} onFileSelect={setFileExtension} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestBookPage;
