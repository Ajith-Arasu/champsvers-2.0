import React from 'react'
import { useState } from 'react';
import styles from './style.module.css';
import QuestCard from '../../components/QuestCard/QuestCard';
import Button from '../../components/Button/Button';
import PageHeader from '../../components/Header/PageHeader';
import axios from 'axios';

const QuestCreation = () => {
  const [questData, setQuestData] = useState({
    title: '',
    description: '',
    points: '',
    category: '',
    tags: '',
    age: ''
});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setQuestData((prev) => ({
      ...prev,
      [name]: value
    }));
};

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const response = await axios.post(
      'https://your-api-url/quests',
       {
        title: questData.title,
        description: questData.description,
        points: questData.points,
        category: questData.category,
        tags: questData.tags,
        age: questData.age
      }
);

      console.log('Quest created:', response.data);
      alert('Quest created successfully!');
    } catch (error) {
      console.error('Error creating quest:', error);
      alert('Failed to create quest');
    }
};


  return (
    <div className={styles.questspage}>
      <PageHeader title="QUESTS" dividerwidth="100%" />
      <div className={styles.quest_creation}>
        <form>
          <div className={styles.quest_details}>
            <div className={styles.form_group}>
              <label>TITLE</label>
              <input 
                type="text"
                name="title"
                value={questData.title}
                onChange={handleChange}
                placeholder="A BEAUTIFUL AQUARIUM"></input>
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea 
                type="text"
                rows="9" cols="30"
                name="description" 
                value={questData.description}
                onChange={handleChange}
                placeholder="Draw a fish tank or bowl that you own or wish to own and explain about the breeds of the fishes inside. What food would you feed them? What plants will you plant inside, what other things you will keep inside the to make it a home for all the fishes."></textarea>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>POINTS<span>(30 TO 200)</span></label>
              <input
                type="text"
                name="points"
                value={questData.points}
                onChange={handleChange}
                placeholder="120"></input>
            </div>
            <div className={styles.form_group}>
              <label>CATEGORY</label>
              <input
                type="text"
                name="category"
                value={questData.category}
                onChange={handleChange}
                placeholder="ANIMALS"></input>
            </div>
            <div className={styles.form_group}>
              <label>TAGS</label>
              <input
                type="text"
                name="tags"
                value={questData.tags}
                onChange={handleChange}
                placeholder="PETS, NATURE, ANIMALS, FISHES"></input>
            </div>
            <div className={styles.form_group}>
              <label className={styles.points}>AGE<span>(4 TO 18/ALL)</span></label>
              <input 
                type="text"
                name="age"
                value={questData.age}
                onChange={handleChange}
                placeholder="PETS, NATURE, ANIMALS, FISHES"></input>
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
            {/*<QuestCard
  title={questData.title || 'QUEST TITLE'}
  description={questData.description}
  points={questData.points}
  category={questData.category}
/>
*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestCreation
