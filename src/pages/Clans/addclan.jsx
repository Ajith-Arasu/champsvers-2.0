import React from 'react'
import { useState, useEffect} from 'react';
import styles from './style.module.css';
import ClanCard from '../../components/Card/ClanCard';
import Button from '../../components/Button/Button';
import axios from 'axios';

const AddClan = () => {
  const [formData, setFormData] = useState({
    clan_name: '',
    clan_description: '',
    members_count:'',
    clan_code: '',
    pictureUrl: ''
   }
);

  const [bannerKey, setBannerKey] = useState('');
  const [uploadData, setUploadData] = useState(null);
  const [imageDimension, setImageDimension] = useState({
    width: "",
    height: "",
    isPortrait: "",
    size: ""
});

  const handleDimensionChange = (dimension) => {
    setImageDimension(dimension);
    console.log("Received in parent:", dimension);
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
};

  const clanAPI = async () =>{
    try {
      const text_token = localStorage.getItem("access_token");
      if (!text_token) {
        console.error("Access token not found");
        return;
}
      const api = axios.create({
        baseURL: "https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev",
});
      const response = await api.get("api/v1/s3/upload-url", {
        headers: {
          Authorization: `Bearer ${text_token}`,
        },
        params: {
          upload_sub_type:"CLANS",
          type:"IMAGES",
          extension:"jpeg",
          upload_type:"PAGES",
        },
      });
      console.log("API response:", response.data.data);
      const upLoadurl= response.data.data;
      console.log("upLoadurl:", upLoadurl);
      setUploadData(upLoadurl);
      console.log("key:", upLoadurl.keyName);
      setBannerKey(upLoadurl.keyName);
    }catch(error){
      console.error("Error fetching upload URL:", error);
    }
  };

  useEffect(() => {
    clanAPI();
   },[]);

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if(!bannerKey){
      alert("Submission Blocked.  Banner is missing");
      return;
    }

    const payload = {
      clan_name: formData.clan_name,
      clan_description: formData.clan_description,
      type: "CLAN",
      clan_cover:{
	      type:"IMG",
	      dimension:{
	      height:Number(imageDimension?.height) || 0,
	      width:Number(imageDimension?.width) || 0,
	},
	     isPortrait:Boolean(imageDimension?.isPortrait),
	     size:imageDimension?.size,
	     name: bannerKey,
},
      members_count: Number(formData.members_count) || 0,
    };
    console.log('Submitting Clan:', payload);

    try {
      const text_token= localStorage.getItem("access_token");
      if (!text_token) {
        console.error("Access token not found");
        return;
      }
      const postResponse = await axios.post(
        'https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev/api/v1/clan', 
        payload,
        {
          headers: {
            Authorization: `Bearer ${text_token}`,
           "Content-Type": "application/json"
    },
        });

      if (postResponse.status === 200) { 
        alert("Clan created successfully!");
        setFormData({
          clan_name: '',
          clan_description: '',
          members_count:'',
          clan_code: '',
          pictureUrl: ''
        });
      }
    } catch (error) {
      console.log("Status:", error.response?.status);
      console.log("Error:", error);
      console.log("Data:", error.response?.data);
      if (error.response?.status === 403) {  
        alert("Permission Denied: You don't have rights to create a clan."); 
      }
    }
  };

  return (
    <div className={styles.addclanpage}>
      <div className={styles.title}>NEW CLAN</div>
      <div className={styles.clan_new}>
        <form onSubmit={handleSubmit}>
          <div className={styles.clan_details}>
            <div className={styles.form_group}>
              <label>CLAN NAME</label>
              <input 
                type="text"
                name="clan_name"
                value={formData.clan_name}
                onChange={handleChange}
                placeholder="SCA JAGUARS" />
            </div>
            <div className={styles.form_group}>
              <label>CLAN CODE</label>
              <input
                type="text"
                name="clan_code"
                value={formData.clan_code}
                onChange={handleChange}
                placeholder="SCA JAGUARS" />
            </div>
            <div className={styles.form_group}>
              <label>MAX LIMIT</label>
              <input 
                type="number"
                name="members_count"
                value={formData.members_count}
                onChange={handleChange}
                placeholder="500" />
            </div>
            <div className={styles.form_group}>
              <label>DESCRIPTION</label>
              <textarea cols="30" rows="8"
                name="clan_description"
                value={formData.clan_description}
                onChange={handleChange}
                placeholder="ENTER SOMETHING ABOUT THE STUDENT(OPTIONAL)" />
            </div>
            <div className={styles.form_group}>
              <label>PICTURE-URL <span>(optional)</span></label>
              <input
                type="text"       
                name="pictureUrl"
                value={formData.pictureUrl}
                onChange={handleChange}
                placeholder="ClanAvatar2.png" />
            </div>
          </div>
          <div className={styles.form_button}>
        <Button label="save" />
      </div>
        </form>
        <div className="clan_card">
          <ClanCard uploadData={uploadData} onDimensionChange={handleDimensionChange} />
        </div>
      </div>
    </div>
  );
};

export default AddClan
