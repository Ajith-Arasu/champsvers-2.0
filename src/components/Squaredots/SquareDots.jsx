import React from 'react'
import style from './style.module.css';

const SquareDots = () => {
  return (
    <div className={style.squaredots}>
      <span className={style.dots}></span>
      <span className={style.dots}></span>
      <span className={style.dots}></span>
    </div>
  )
}

export default SquareDots
