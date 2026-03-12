import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './style.module.css';
import AddButton from '../../components/Addbutton/AddButton';
import PageHeader from '../../components/Header/PageHeader';
import QuestListCard from '../../components/QuestListCard/QuestListCard';

const QuestBookList = () => {
  const [questBooks, setQuestBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/questbook/create');
  };

  const fetchQuestBooks = async () => {
    try {
      setLoading(true);
      const text_token = localStorage.getItem('access_token');
      if (!text_token) {
        console.error('Access token not found');
        return;
      }

      const api = axios.create({
        baseURL: 'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev'
      });

      const response = await api.get('/api/v1/quest-books', {
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
    }finally{
      setLoading(false);
    }
  };
  console.log('QuestBook:', questBooks);

  useEffect(() => {
    fetchQuestBooks();
  }, []);

  return (
    <div className={styles.questspage}>
      <PageHeader title="QUEST BOOK" dividerwidth="100%">
        <AddButton text="ADD NEW QUEST BOOK" onClick={handleCreateClick} />
      </PageHeader>

      <div className={styles.quest_gallery}>
        {loading ? (<p className={styles.loadingtext}>Loading Quests...</p>):questBooks.length > 0 ? (
          questBooks.map((questBook) => (
            <QuestListCard
              key={questBook.qb_id}
              image={`https://d1wlhv1hqb6088.cloudfront.net/0798c554-a13a-412f-8143-33ac804cf088/PAGES/QUEST_BOOKS/IMAGES/medium/${questBook.qb_cover}`}
              titleLine1={questBook.title}
              description={questBook.desc}
            />
          ))):(<p className={styles.loadingtext}>No quests Found</p>)}
      </div>
    </div>
  );
};

export default QuestBookList;
