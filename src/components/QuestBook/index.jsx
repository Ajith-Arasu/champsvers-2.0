import React from 'react';
import {Box} from '@mui/material';
import QuestListCard from '../QuestListCard/QuestListCard';

const QuestBook = () => {
  



  return (
    <>
    <Box
    sx={{
      padding:"20px",
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill, minmax(200px,1fr))",
      gap:"20px",
      width:"100%",
      boxSizing:"border-box",
    }}
    >

      <QuestListCard/>
     
    </Box>
    </>
    
  )
}

export default QuestBook
