import styles from './style.module.css';

const ClanCard = (props) => {
  return (
    <div className={styles.clancard}>
      <div className={styles.clan_info}>
        <img className={styles.clan_img} src={props.image} alt={props.label} />
      </div>
      <div className={styles.clan_details}>
        <p className={styles.clan_name}>{props.label}</p>
        <span className={styles.clan_value}>{props.value}</span>
      </div>
    </div>
 );
};

export default ClanCard

