import React from 'react'
import styles from './style.module.css';
import ClanCard from '../../components/Card/ClanCard';
import img1 from '../../assets/images/scapanthers.png';
import img2 from '../../assets/images/scajaquars.png';
import img3 from '../../assets/images/scaleopards.png';
import img4 from '../../assets/images/scacheetah.png';
import AddButton from '../../components/Addbutton/AddButton';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/Header/PageHeader';

const Clans = () => {
  const clanCards=[
    {id:1, image: img1, label:"SCA PANTHERS", value:"302"},
    {id:2, image:img2, label:"SCA JAGUARS", value:"310"},
    {id:3, image:img3, label:"SCA LEOPARDS", value:"299"},
    {id:4, image:img4, label:"SCA CHEETAH", value:"315"}
  ];
  const navigate=useNavigate();
  const handleImageClick=(id)=>{
    navigate(`/clans/${id}/details`);
  }
  const handleClick=(id)=>{
    navigate(`/clans/${id}/addclan`);
  }
  return (
    <div className={styles.clanspage}>
      <PageHeader title="CLANS" dividerwidth="100%">
        <AddButton text="ADD NEW CLAN" onClick={()=>{handleClick(123)}} />
      </PageHeader>
      <div className={styles.clanscard}>
        {clanCards.map((item, id)=>(<ClanCard key={id} image={item.image} onImageClick={()=>{handleImageClick(item.id)}} label={item.label} value={item.value} />))}
      </div>
    </div>
  );
};

export default Clans

