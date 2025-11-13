import React from 'react'
import styles from './style.module.css';
import ClanCard from '../../components/Card/ClanCard';
import img1 from '../../assets/images/scapanthers.png';
import img2 from '../../assets/images/scajaquars.png';
import img3 from '../../assets/images/scaleopards.png';
import img4 from '../../assets/images/scacheetah.png';

const Clans = () => {
  return (
    <div className={styles.clanspage}>
      <div className={styles.title}>CLANS</div>
      <div className={styles.clanscard}>
        <ClanCard image={img1} label="SCA PANTHERS" value="302" />
        <ClanCard image={img2} label="SCA JAGUARS" value="310" />
        <ClanCard image={img3} label="SCA LEOPARDS" value="299" />
        <ClanCard image={img4} label="SCA CHEETAH" value="315" />
      </div>
    </div>
  );
};

export default Clans

