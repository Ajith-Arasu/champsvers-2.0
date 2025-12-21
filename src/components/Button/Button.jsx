import styles from './style.module.css';

const Button = (props) => {
  return (
    <button className={styles.save_btn}>
      <span className={styles.savetext}>{props.label}</span>
    </button>
  )
}

export default Button
