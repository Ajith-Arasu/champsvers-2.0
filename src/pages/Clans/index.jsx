import React from 'react'
import { useState, useEffect } from 'react';
import styles from './style.module.css';
import ClanCard from '../../components/Card/ClanCard';
import AddButton from '../../components/Addbutton/AddButton';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../components/Header/PageHeader';
import axios from 'axios';

const Clans = () => {
  const [clanCards, setClanCards]=useState([]);
  const BASE_URL = import.meta.env.VITE_IMAGE_CDN
 {/* const clanCards=[
    {id:1, image: img1, label:"SCA PANTHERS", value:"302"},
    {id:2, image:img2, label:"SCA JAGUARS", value:"310"},
    {id:3, image:img3, label:"SCA LEOPARDS", value:"299"},
    {id:4, image:img4, label:"SCA CHEETAH", value:"315"}
  ];*/}
  const navigate=useNavigate();
  const handleImageClick=(id)=>{
    navigate(`/clans/${id}/details`);
  }
  const handleClick=(id)=>{
    navigate(`/clans/${id}/addclan`);
  }
   const fetchClans = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("Access token not found");
        return;
}
      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("/api/v1/clans", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
         count: 4,
          
        },
      });
      console.log("API response:", response.data.data);
      setClanCards(response.data.data);
    } catch (error) {
      console.error("Error fetching clans:", error);
    }
};

  useEffect(()=>{
    fetchClans();
   },[]);

   console.log(BASE_URL);

 return (
    <div className={styles.clanspage}>
      <PageHeader title="CLANS" dividerwidth="100%">
        <AddButton text="ADD NEW CLAN" onClick={()=>{handleClick(123)}} />
      </PageHeader>
      <div className={styles.clanscard}>
        {clanCards.map((item, id)=>(<ClanCard key={id} image={`${BASE_URL}${item?.created_by}/PAGES/CLANS/IMAGES/medium/${item?.clan_cover?.name}`} onImageClick={()=>{handleImageClick(item.id)}} label={item.clan_name} value={item.clan_members_count} />))}
      </div>
    </div>
  );
};

export default Clans

