import styles from '../styles/Gift.module.css';

export default function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.box}></div>
      <div className={styles.first_tie}></div>
      <div className={styles.second_tie}></div>
    </div>
  );
}