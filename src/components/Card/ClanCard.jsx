import { useRef, useState, useEffect } from 'react';
import { fromBlob } from "image-resize-compress";
import styles from './style.module.css';

// Handles resizing and sequential uploading
export const uploadImageVariants = async (file, uploadData) => {
  if (!file || !uploadData) return;

  const formats = [
    { label: "preSignedUrlThumb", quality: 30, width: 240, height: 320 },
    { label: "preSignedUrlMedium", quality: 50, width: 720, height: 1080 },
    { label: "preSignedUrlRaw", quality: 80, width: 1920, height: 1080 },
  ];

  // Resize the blob based on the original file
  const processUpload = async({label, quality, width, height})=>{
    const resizedBlob = await fromBlob(file, quality, width, height);
    const uploadUrl = uploadData[label];

    if (!uploadUrl) {
      console.error(`Missing presigned url for ${label}`);
      return;
    }

    const response = await fetch(uploadUrl, {
      method: 'PUT',
      body: resizedBlob,
      headers: { 'Content-Type': file.type }, 
    });

    if (!response.ok){
      throw new Error(`Upload failed for ${label}`);
    }
  };

  for (const format of formats) {
    await processUpload(format);
  }
};

// Main Component
const ClanCard = ({uploadData, onDimensionChange }) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
 

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const getImageDimensions = (file) => {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        const width = img.naturalWidth
        const height = img.naturalHeight

// file size in KB
        const sizeKB = (file.size / 1024).toFixed(2);

// portrait check
        const isPortrait = height > width;

        resolve({
          width,
          height,
          sizeKB,
          isPortrait
});
      
};

  img.onerror = reject;

  img.src = URL.createObjectURL(file);
  });
};

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const { width, height, sizeKB, isPortrait } = await getImageDimensions(file);

  console.log("Width:", width);
  console.log("Height:", height);
  console.log("SizeKB:", sizeKB);
  console.log("Isportrait:", isPortrait);
     
  if (onDimensionChange) {
    onDimensionChange({ width, height, size: sizeKB, isPortrait });
  }

    setImage(file);
  }

  const upLoadImg = async()=>{
    try{
      if(!image || !uploadData)
         return;
      await uploadImageVariants(image, uploadData);
      console.log();
    }catch(error){
      console.error();
    }
   };
  

  useEffect(() => {
    if(image && uploadData && uploadData.preSignedUrlRaw && uploadData.preSignedUrlMedium && uploadData.preSignedUrlThumb){
      upLoadImg();
   }
  }, [image, uploadData]);

  
  return (
    <>
      <div className={styles.image_container}>
        <p className={styles.clanname} onClick={handleImageClick}>+clanimage</p>
        {image && (<img src={URL.createObjectURL(image)} alt="preview" className={styles.previewImage}  /> )}
        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
      </div>
    </>
  );
};


export default ClanCard;