import React from 'react'
import { useState } from 'react';
import styles from './style.module.css';
import RectangleButton from '../../components/RectangleButton/RectangleButton';
import PageHeader from '../../components/Header/PageHeader';
import { useMediaQuery } from '@mui/material';
import axios from 'axios';

const LeaderBoard = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [period, setPeriod] = useState('weekly');

const [leaderboardData, setLeaderboardData] = useState({
  jaguars: '',
  panthers: '',
  leopards: '',
  cheetahs: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;

  setLeaderboardData((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handlePeriodSelect = (value) => {
  setPeriod(value);
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'https://your-api-url/leaderboard',
      {
        period,
        scores: leaderboardData
      }
    );

    console.log('Leaderboard saved:', response.data);
    alert('Leaderboard updated successfully!');
  } catch (error) {
    console.error('Error saving leaderboard:', error);
    alert('Failed to update leaderboard');
  }
};


  return (
    <div className={styles.leaderpage}>
      <PageHeader title="LEADERBOARD" dividerwidth="100%" />
      <div className={styles.leader_code}>
        <form className={styles.leader_form} onSubmit={handleSubmit}>
          <div className={styles.leader_button}>
            <div className={styles.first_row}>
              <RectangleButton label="weekly" onClick={() => setPeriod('weekly')}/>
              <RectangleButton label="Monthly" onClick={() => setPeriod('monthly')}/>
              <RectangleButton label="yearly" onClick={() => setPeriod('yearly')}/>
            </div>
            <div className={styles.second_row}>
              <RectangleButton label="Q1" onClick={() => setPeriod('Q1')}/>
              <RectangleButton label="Q2" onClick={() => setPeriod('Q2')}/>
              <RectangleButton label="Q3" onClick={() => setPeriod('Q3')}/>
              <RectangleButton label="Q4" onClick={() => setPeriod('Q4')}/>
            </div>
          </div>
          <div className={styles.form_layout}>
            <label>SCA JACUARS</label>
            <input style={{ width: isMobile ? '70%' : '330px' }} type="text" placeholder="33,023 pts" name="currentcode" />
          </div>
          <div className={styles.form_layout}>
            <label>SCA PANTHERS</label>
            <input style={{ width: isMobile ? '50%' : "250px" }} type="text" name="newcode" />
          </div>
          <div className={styles.form_layout}>
            <label>SCA LEOPARDS</label>
            <input style={{ width: isMobile ? '60%' :"290px" }} type="text" name="newcode" />
          </div>
          <div className={styles.form_layout}>
            <label>SCA CHEETAHS</label>
            <input style={{ width: isMobile ? '80%' : "390px" }} type="text" name="newcode" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaderBoard
