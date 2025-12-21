import styles from './style.module.css';

const ClanCard = ({image,label, value, onImageClick}) => {
  return (
    <div className={styles.clancard}>
      <div className={styles.clan_info}>
        <img className={styles.clan_img} src={image} onClick={onImageClick} alt={label} />
      </div>
      <div className={styles.clan_details}>
        <p className={styles.clan_name}>{label}</p>
        <span className={styles.clan_value}>{value}</span>
      </div>
    </div>
 );
};

export default ClanCard

