import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';
import { Radio, RadioGroup, Box, Typography, TextField, Chip } from '@mui/material';
import { quest_difficultylevels } from '../../utils/const';


const QuestBookPage = () => {
  const initialQuestState = {
    title: '',
    description: '',
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
  const [inputValue, setInputValue] = useState('');
 

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (questData.tags.length < 5) {
        setQuestData((prev) => ({
          ...prev,
          tags: [...prev.tags, inputValue.trim()]
        }));
        setInputValue('');
      }
    }
  };

  const handleDeleteTag = (indexToDelete) => {
    setQuestData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== indexToDelete)
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuestData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const minval = questData.l_age !== '' ? parseInt(questData.l_age) : null;
  const maxval = questData.h_age !== '' ? parseInt(questData.h_age) : null;

  const isError = minval !== null && maxval !== null && minval > maxval;

  const questAPI = async () => {
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
          extension:'jpeg',
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


  useEffect(() => {
    questAPI();
      }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bannerKey) {
      alert('Submission Blocked. Banner is missing');
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
          tags: questData.tags.map(tag=>({name:tag})),
          ct_banner: bannerKey,
          cr_banner: bannerKey,
    };

    if (questData.l_age && questData.h_age) {
      payload.l_age = Number(questData.l_age);
      payload.h_age = Number(questData.h_age);
    }

    try {
      const text_token = localStorage.getItem('access_token');
      if (!text_token) {
        console.error('Access token not found');
        return;
      }
      const postResponse = await axios.post(
        'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev/api/v1/contest',
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
                name="description"
                value={questData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>
                POINTS<span>(30 TO 200)</span>
              </label>
              <input type="number" name="points" value={questData.points} onChange={handleChange} required />
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
                  <Radio value="easy" sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} required />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Easy</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Radio value="moderate" sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Moderate</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Radio value="hard" sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Hard</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Radio value="complex" sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }} />
                  <Typography sx={{ color: '#fff', fontSize: '14px' }}>Complex</Typography>
                </Box>
              </RadioGroup>
            </div>
            <div className={styles.form_group}>
              <label>CATEGORY</label>
              <input type="text" name="category" value={questData.category} onChange={handleChange} required />
            </div>
            <div className={styles.form_group}>
              <label>TAGS</label>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 1,
                  alignItems: 'center',
                  width: '450px',
                  borderRadius: '20px',
                  background: '#D9D9D929',
                  padding: '10px',
                  height: '60px',
                  overflowX: 'auto'
                }}
              >
                {questData.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => handleDeleteTag(index)}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      borderRadius: '8px',
                      '& .MuiChip-deleteIcon': {
                        color: '#fff'
                      }
                    }}
                  />
                ))}

                {questData.tags.length < 5 && (
                  <TextField
                    variant="standard"
                    placeholder={questData.tags.length === 0 ? 'Add Tag (Press Enter)' : 'Add more...'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleAddTag}
                    InputProps={{
                      disableUnderline: true,
                      style: { color: '#fff', fontSize: '14px', marginLeft: '8px' }
                    }}
                    sx={{ flexGrow: 1, minWidth: '120px' }}
                  />
                )}
              </Box>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>
                AGE<span>(4 TO 18/ALL)</span>
              </label>
              <Box display="flex" gap={2} alignItems="center" justifyContent="center">
                <TextField
                  sx={{
                    input: {
                      color: '#fff'
                    },
                    '& .MuiInputLabel-root': { color: '#fff' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' }
                  }}
                  type="number"
                  name="l_age"
                  label="Min"
                  value={questData.l_age}
                  onChange={handleChange}
                  inputProps={{ min: 4, max: 17 }}
                  error={isError}
                  helperText={isError ? 'Min age should be less than Max age' : ''}
                  placeholder="4"
                  size="small"
                />
                <span style={{ color: '#fff' }}>to</span>
                <TextField
                  sx={{
                    input: {
                      color: '#fff'
                    },
                    '& .MuiInputLabel-root': { color: '#fff' },
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' }
                  }}
                  type="number"
                  name="h_age"
                  label="Max"
                  value={questData.h_age || ''}
                  onChange={handleChange}
                  inputProps={{ min: 5, max: 18 }}
                  placeholder="18"
                  size="small"
                />
              </Box>
            </div>
      
          <div className={styles.form_button}>
            <Button label="SAVE" />
          </div>
          </div>
        </form>
        <div className={styles.quest_preview}>
          <p className={styles.text_preview}>PREVIEW</p>
          <div className="quest_card">
            <QuestCard uploadData={uploadData} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestBookPage;
