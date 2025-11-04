import React from 'react';
import styles from './style.module.css';

const RectangleButton = (props) => {
  return (
    <div className={styles.rectanglebutton}>
       {props.label}
   </div>
  )
}

export default RectangleButton
