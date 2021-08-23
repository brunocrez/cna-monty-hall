import styles from '../styles/Gift.module.css';

export default function Gift() {
  return (
    <div className={styles.gift}>
      <div className={styles.cover}></div>
      <div className={styles.box}></div>
      <div className={styles.firstTie}></div>
      <div className={styles.secondTie}></div>
    </div>
  );
}