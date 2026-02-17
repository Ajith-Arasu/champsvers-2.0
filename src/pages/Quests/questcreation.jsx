import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';
import {Radio, RadioGroup, Box, Typography, TextField} from '@mui/material';
import { quest_difficultylevels } from '../../utils/const';

const QuestCreation = () => {
  const initialQuestState = {
    title: '',
    description: '',
    points: '',
    difficulty_level: '',
    category: '',
    tags: '',
    l_age: '',
    h_age: ''
};
  const [questData, setQuestData] = useState(initialQuestState);
  const [bannerKey, setBannerKey] = useState('');
  const [uploadData, setUploadData] = useState(null);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
   
    
     setQuestData((prev) => ({
      ...prev,
      [name]: value
    
    }));
};

  const questAPI= async() =>{
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("Access token not found");
        return;
 }

      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("api/v1/s3/upload-url", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          upload_sub_type:"MICRO_CONTESTS",
          type:"IMAGES",
          extension:"jpeg",
          upload_type:"PAGES",
        },
      });
      console.log("API response:", response.data.data);
      const upLoadurl= response.data.data;
      console.log("upLoadurl:", upLoadurl);
      setUploadData(upLoadurl);
      console.log("key:", upLoadurl.keyName);
      setBannerKey(upLoadurl.keyName);
    }catch(error){
      console.error("Error fetching upload URL:", error);
    }
  };

  useEffect(() => {
    questAPI();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if(!bannerKey){
      alert("Submission Blocked.  Banner is missing");
      return;
    }

    const payload={
      type: "MICRO_CONTEST",
      work_type: "POST",
      title: questData.title,
      description: questData.description,
      winning_points: Number(questData.points),
      difficulty_level: Number(quest_difficultylevels[questData.difficulty_level]) || 1,
      category: questData.category,
      tags: [{ name: questData.tags }],
      l_age: Number(questData.l_age),
      h_age: Number(questData.h_age),
      ct_banner: bannerKey,
      cr_banner: bannerKey,
};
    console.log('Submitting quest:', payload);

    try {
      const accessToken = localStorage.getItem("access_token");
      console.log("Access Token:", accessToken);  
      if (!accessToken) {
        console.error("Access token not found");
        return;
      }
      const postResponse = await axios.post(
        'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev/api/v1/contest', 
        payload,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
           "Content-Type": "application/json"
    },
        });
      if (postResponse.status === 200) { 
        alert("Quest created successfully!");
        setQuestData(initialQuestState);
      }
    } catch (error) {
      console.log("STATUS:", error.response?.status);
      console.log("Error:", error);
      console.log("DATA:", error.response?.data);
      if (error.response?.status === 403) {  
        alert("Permission Denied: You don't have rights to create a quest."); 
      }
    }
  };
  
  return (
    <div className={styles.questspage}>
      <PageHeader title="QUESTS" dividerwidth="100%" />
      <div className={styles.quest_creation}>
        <form onSubmit={handleSubmit}>
          <div className={styles.quest_details}>
            <div className={styles.form_group}>
              <label>TITLE</label>
              <input 
                type="text"
                name="title"
                value={questData.title}
                onChange={handleChange}>
          </input>
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea 
                type="text"
                rows="9" cols="30"
                name="description" 
                value={questData.description}
                onChange={handleChange}>
              </textarea>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>POINTS<span>(30 TO 200)</span></label>
              <input
                type="number"
                name="points"
                value={questData.points}
                onChange={handleChange}>
              </input>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>LEVELS</label>
              <RadioGroup 
                row 
                name="difficulty_level" 
                value={questData.difficulty_level} 
                onChange={handleChange}
                sx={{ gap: '35px' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Radio
                  value="easy"
                  sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                  />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Easy</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Radio
                    value="moderate"
                    sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                  />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Moderate</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Radio
                    value="hard"
                    sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                  />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Hard</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Radio
                    value="complex"
                    sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                  />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Complex</Typography>
                </Box>
              </RadioGroup>
            </div>
            <div className={styles.form_group}>
              <label>CATEGORY</label>
              <input
                type="text"
                name="category"
                value={questData.category}
                onChange={handleChange}>
              </input>
            </div>
            <div className={styles.form_group}>
              <label>TAGS</label>
              <input type="text" name="tags" value={questData.tags} onChange={handleChange}></input>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>AGE<span>(4 TO 18/ALL)</span></label>
              <Box display="flex" gap={2} alignItems="center" justifyContent="center">
                <TextField sx={{
                    input: {
                      color: "#fff",
                    },
                    "& .MuiInputLabel-root": { color: "#fff" }, 
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" } 
                  }}
                  type="number"
                  name="l_age"
                  label="Min"
                  value={questData.l_age}
                  onChange={handleChange}
                  inputProps={{ min: 4, max: 17}}
                
                  placeholder="4"
                  size="small"
                />
                <span style={{ color: "#fff" }}>to</span>
                <TextField sx={{
                    input: {
                      color: "#fff",
                    },
                      "& .MuiInputLabel-root": { color: "#fff" }, 
                      "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" } 
                  }}
                  type="number"
                  name="h_age"
                  label="Max"
                  value={questData.h_age || ""}
                  onChange={handleChange}
                  inputProps={{ min: 5, max: 18 }}
                  
                  placeholder="18"
                  size="small"
                />
                <TextField 
                  label="All"
                  type="text"
                  name="age"
                  value={questData.age || ""} 
                  placeholder="All"
                  InputLabelProps={{ shrink: true }} 
                  sx={{ 
                    input: { color: "#fff" },
                    "& .MuiInputLabel-root": { color: "#fff" }, 
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" } 
                  }}
                />
              </Box>
            </div>
          </div>
          <div className={styles.form_button}>
            <Button label="SAVE QUEST" /> 
          </div>
        </form>
        <div className={styles.quest_preview}>
          <p className={styles.text_preview}>PREVIEW</p>
          <div className="quest_card">
            <QuestCard uploadData={uploadData}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCreation
