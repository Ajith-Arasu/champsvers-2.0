import {useRef, useState, useEffect} from 'react';
import styles from './style.module.css';
import {fromBlob } from "image-resize-compress";


//upload Image Variants
export const upLoadImageVariants = async (file,uploadData) => {
  if(!file || !uploadData) return;

//Grab Extension
  const extension = file.name.split('.').pop();

//create formats
  const formats = [
    {
      label:"preSignedUrlThumb",
      quality:30,
      width:240,
      height:320,
    },
    {
      label:"preSignedUrlMedium",
      quality:50,
      width:720,
      height:1080,
    },
    {
      label: "preSignedUrlRaw",
      quality:80,
      width:1920,
      height:1080,
    },
  ];

  //ResizeBlobs
  const processUpload = async({label, quality, width, height}) =>{
    const resizedBlob = await fromBlob(file, quality, width, height, extension);
    const uploadUrl = uploadData[label];

    if(!uploadUrl) {
      console.error(`Missing presigned url for ${label}`);
      return;
    }
    const response = await fetch(uploadUrl, {
      method: 'PUT',
      body: resizedBlob,
      headers: {
        'Content-Type': resizedBlob.type
      },
    });
    if (!response.ok) {
      throw new Error(`Upload failed for ${label}`);
    }
  }
  for(const format of formats){
    await processUpload(format);
  }
};

const QuestCard = ({ uploadData}) => {
  
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if(!file) return;

    const allowedextensions = ["image/jpeg","image/png","image/webp","image/jpg","image/gif","image/svg"];

    if(!allowedextensions.includes(file.type))
    {
      alert("Invalid image format");
      event.target.value=null;
      return;
    }
    console.log('file', file);
    setImage(file);


  };
  const upLoadImg = async() =>{
    try{
      if(!image || !uploadData) return;

      await upLoadImageVariants(image, uploadData);

      console.log("All image variants uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    if(image && uploadData && uploadData.preSignedUrlRaw && uploadData.preSignedUrlMedium && uploadData.preSignedUrlThumb){
      upLoadImg();
    }
  },[image, uploadData]);

  return (
  <>
      <div className={styles.image_container}>
        <p className={styles.questname} onClick={handleImageClick}>+Questimage</p>
        {image && (<img src={URL.createObjectURL(image)} alt="preview" className={styles.previewImage}  /> )}
        <input ref={fileInputRef} type="file" accept="image/*,application/pdf" style={{ display: "none" }} onChange={handleImageChange} />
      
      </div>
 </>
    
  );
};

export default QuestCard
