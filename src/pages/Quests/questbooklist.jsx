import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './style.module.css';
import AddButton from '../../components/Addbutton/AddButton';
import PageHeader from '../../components/Header/PageHeader';
import QuestListCard from '../../components/QuestListCard/QuestListCard';

const QuestBookList = () => {
  const [questBooks, setQuestBooks] = useState([]);
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/questbook/create');
  };

  const fetchQuestBooks = async () => {
    try {
      const text_token = localStorage.getItem('access_token');
      if (!text_token) {
        console.error('Access token not found');
        return;
      }

      const api = axios.create({
        baseURL: 'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev'
      });

      const response = await api.get('/api/v1/contests', {
        headers: {
          Authorization: `Bearer ${text_token}`
        },
        params: {
          contest_type: 'MICRO_CONTEST'
        }
      });

      setQuestBooks(response.data.data || []);
    } catch (error) {
      console.error('Error fetching quest books:', error);
    }
  };

  useEffect(() => {
    fetchQuestBooks();
  }, []);

  return (
    <div className={styles.questspage}>
      <PageHeader title="QUEST BOOK" dividerwidth="100%">
        <AddButton text="ADD NEW QUEST BOOK" onClick={handleCreateClick} />
      </PageHeader>

      <div className={styles.quest_gallery}>
        {questBooks.length > 0 &&
          questBooks.map((questBook) => (
            <QuestListCard
              key={questBook.contest_id}
              image={`https://d1wlhv1hqb6088.cloudfront.net/0798c554-a13a-412f-8143-33ac804cf088/PAGES/MICRO_CONTESTS/IMAGES/medium/${questBook.cr_banner}`}
              titleLine1={questBook.category}
              titleLine2={questBook.title}
              description={questBook.description}
            />
          ))}
      </div>

      {questBooks.length === 0 && <div className={styles.empty_state}>No quest books found</div>}
    </div>
  );
};

export default QuestBookList;
