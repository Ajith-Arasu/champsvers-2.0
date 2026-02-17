import {useRef, useState, useEffect, use} from 'react';
import styles from './style.module.css';

const QuestCard = ({uploadData}) => {
  
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log('file', file);
    setImage(file);
  };
  const upLoadImg = async() =>{
    try{
      const response = await fetch(uploadData.preSignedUrlRaw, {
        method: 'PUT',
        body: image,
        headers: {
          'Content-Type': image.type
        }
      });
      console.log("Upload response:", response);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    if(image && uploadData && uploadData.preSignedUrlRaw) {
      upLoadImg();
    }
  },[image, uploadData]);

  return (
  <>
      <div className={styles.image_container}>
        <p className={styles.questname} onClick={handleImageClick}>+Questimage</p>
        {image && (<img src={URL.createObjectURL(image)} alt="preview" className={styles.previewImage}  /> )}
        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
      </div>
    
 </>
    
  );
};

export default QuestCard
