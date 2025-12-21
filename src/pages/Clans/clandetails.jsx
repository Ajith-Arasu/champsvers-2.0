import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';
import clanimg from '../../assets/images/clanimage.png';
import StudentCreations from '../../components/Studentcreations/StudentCreations';
import InfoBlock from '../../components/InfoBlock/InfoBlock';
import AddButton from '../../components/Addbutton/AddButton';
import rtchevicon from '../../assets/images/rgtchevron.png';
import PageHeader from '../../components/Header/PageHeader';

const ClanDetails = () => {
  const [talentList, settalentList] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) =>{
    navigate(`/students/${id}/profile`);
  }

  useEffect(() =>{
    const fetchtalentList = async () =>{
      try{
        const response = await api.get('/posts');
        settalentList(data.posts);
        console.log(response.data);
      } catch(err)
{
        console.log(err.message);
      }
    }
    fetchtalentList();
  },[]);
  return (
    <div className={styles.clanspage}>
      <PageHeader title="CLAN" dividerwidth="100%">
        <div className={styles.titlebtn_grp}>
          <AddButton text="ADD STUDENT" onClick={()=>handleClick(123)}/>
          <AddButton text="DELETE CLAN" icon={rtchevicon} /> 
        </div>
      </PageHeader>
      <div className={styles.clandetails}>
        <div className={styles.score_card}>
          <div className={styles.user_activity}>
            <div className={styles.clan_info}>
              <img className={styles.clan_img} src={clanimg} alt="clanimage" />
              <div className={styles.clan_text}>
                <p>SCA</p>
                <span>JAQUARS</span>
              </div>
            </div>
            <div className={styles.activity_panel}>
              <p>Activity   : 3445</p>
              <p>Popularity  : 3445</p>
              <p>Activity   : 3445</p>
              <p>Activity   : 3445</p>
            </div>
          </div>
          <div className={styles.reward_badge}>
            <div className={styles.coins}>
              <div className={styles.coin_circle}></div>
              <div className={styles.coins_collection}>
                <div className={styles.coin_tiles}>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                  <div className={styles.coin_rectangle}></div>
                </div>
                <span className={styles.coins_label}>COINS EARNED</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.talent_showcase}>
          {talentList.map((talent,index) => (
            <InfoBlock key={index} value={talent.value} label={talent.label} />
          ))}
        </div>
        <StudentCreations />
      </div>
    </div>

  )
}

export default ClanDetails;
