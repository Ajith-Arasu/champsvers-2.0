import styles from './style.module.css';

const InfoBlock = (props) => {
  return (
    <div className={styles.info_box}>
      <p className={styles.info_value}>{props.value}</p>
      <span className={styles.info_label}>{props.label}</span>
    </div>
  )
}

export default InfoBlock

