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
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_IMAGE_CDN

  const navigate=useNavigate();
  const handleImageClick=(id)=>{
    navigate(`/clans/${id}/details`);
  }
  const handleClick=(id)=>{
    navigate(`/clans/${id}/addclan`);
  }
  const fetchClans = async () => {
    try {
      setLoading(true);
      const text_token= localStorage.getItem("access_token");
      if (!text_token) {
        console.error("Access token not found");
        return;
}
      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("/api/v1/clans", {
        headers: {
          Authorization: `Bearer ${text_token}`,
        },
        params: {
         count: 4,
         },
      });
      console.log("API response:", response.data.data);
      setClanCards(response.data.data);
    } catch (error) {
      console.error("Error fetching clans:", error);
    }finally{
      setLoading(false);
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
        {loading ? (<p className={styles.loadingtext}>Loading Clans...</p>): clanCards.length>0 ? (clanCards.map((item, id)=>{
            return (
              <ClanCard key={id}
                image={`${BASE_URL}${item?.created_by}/PAGES/CLANS/IMAGES/medium/${item?.clan_cover?.name}`} 
                onImageClick={()=>{handleImageClick(item.id)}} label={item.clan_name} value={item.clan_members_count} />
            );
          })
        ):(<p className={styles.loadingtext}>No clans Found</p>)}
      </div>
    </div>
  );
};

export default Clans

