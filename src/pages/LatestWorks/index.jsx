import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import StudentCreations from '../../components/Studentcreations/StudentCreations';
import toggleimg from '../../assets/images/tooggleimg.png';
import PageHeader from '../../components/Header/PageHeader';
import axios from 'axios';

const LatestWork = () => {
  const [works, setWorks] = useState([]);

  const fetchWorks = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        console.error("Access token not found");
        return;
}
      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("/api/v1/posts", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          targetIds: "5292e043-56ac-4e24-91a4-8fd928326ad3,d8dab6d4-ff88-410b-b8e9-7d4b4becf900,128c7e0d-2760-4903-9780-70447a2ac4c4,50acaa9a-9715-4f8a-ad3a-0039c97df20b,51af34d0-36b4-4600-8fcf-88966feae622,84d848fb-249c-4a0e-90cf-dac4e8a646a6,cf5ca0ad-e7a4-4aa1-8b08-fce617df789b,c16bdf1a-e890-41c6-af24-5c04ee4fab56, 97ab27e1-c4b7-4530-af2d-b51f18ee013f,dab21fd8-bf78-4b27-a2c5-f60e1d7ac884,042bac9b-6a81-4986-80bb-da445d1ffac9,c8da187b-4fa2-4a04-a2f1-30c25b2a2673,571f10b4-e25a-425d-b12d-85dbc4c08b2d,edfcf0a9-f8e2-436e-852e-986afe49b70f,6f0feee6-4168-4902-b60f-44c2f21e4e24"},

      });
      console.log("API response:", response.data.data);
      setWorks(response.data.data);
      console.log(setWorks);
    } catch (error) {
      console.error("Error fetching clans:", error);
    }
};

  useEffect(()=>{
    fetchWorks();
   },[]);
   console.log('works:', works);

  return (
    <div className={styles.latestwork}>
      <PageHeader title="LATEST WORK" dividerWidth="100%" >
        <div className={styles.title_group}>
          <div className={styles.togglebtn_group}>
            <button className={styles.toggle_btn}>ARTS</button>
            <button className={styles.toggle_btn}>BOOKS</button>
            <button className={styles.toggle_btn}>MUSIC</button>
            <button className={styles.toggle_btn}>PROJECTS</button>
          </div>
          <img src={toggleimg} className={styles.toggle_img} alt='toggleimage'/>
        </div>
      </PageHeader>
      <div className={styles.works_gallery}>
        
        <StudentCreations />
        <StudentCreations />
          
      </div>
    </div>
  )
};

export default LatestWork;
