import React from 'react'
import styles from './style.module.css';
import {Divider} from '@mui/material';

const PageHeader = ({title, dividerWidth = '100%', children}) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.title_bar}>
        <div className={styles.hometext}>{title}</div>
        {children}
      </div>
      <Divider
        sx={{
          borderColor: 'rgba(255, 255, 255, 0.3)',
          borderWidth: '0.25px',
          width: dividerWidth,
          display: { xs: 'none', md: 'block' },
        }} />
    </div>
  )
}

export default PageHeader
