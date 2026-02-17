import styles from './style.module.css';

const Button = ({label, onClick}) => {
  return (
    <button type="submit"
    className={styles.save_btn}
    onClick={onClick}>
      <span className={styles.savetext}>{label}</span>
    </button>
  )
}

export default Button
