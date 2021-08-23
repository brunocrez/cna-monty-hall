import styles from '../styles/Door.module.css';

export default function Door(props) {
  const selected = props.selected ? styles.selected : '';

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${selected}`}>
        <div className={styles.door}>
          <div className={styles.number}>1</div>
          <div className={styles.doorKnob}></div>
        </div>
      </div>
      <div className={styles.ground}></div>
    </div>
  );
}