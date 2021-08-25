import styles from '../styles/Door.module.css';

import DoorModel from '../models/DoorModel';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.isSelected && !door.isOpen ? styles.selected : '';

  const toggle = e => {
    props.onChange(door.toggleSelection());
  }

  const open = e => {
    e.stopPropagation();
    props.onChange(door.open());
  }

  return (
    <div className={styles.area} onClick={toggle}>
      <div className={`${styles.frame} ${selected}`}>
        { door.isOpen ? false : (
          <div className={styles.door}>
            <div className={styles.number}>{door.number}</div>
            <div className={styles.doorKnob} onClick={open}></div>
          </div>
        )}
      </div>
      <div className={styles.ground}></div>
    </div>
  );
}