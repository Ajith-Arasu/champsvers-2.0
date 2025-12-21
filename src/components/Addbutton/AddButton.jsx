import React from 'react'
import styles from './style.module.css';
import plus from '../../assets/images/Plus.png';

const AddButton = ({text, icon, onClick}) => {
  return (
    <div className={styles.add_btn} onClick={onClick}>
      <img className={styles.btn_icon} src={icon || plus} alt="questaddbutton"/>
      <span className={styles.btn_text}>{text}</span>
    </div>
  )
}

export default AddButton
