import styles from '../styles/Door.module.css';

// models
import DoorModel from '../models/DoorModel';

// components
import Gift from './Gift';

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.isSelected && !door.isOpen ? styles.selected : '';

  const toggle = () => {
    props.onChange(door.toggleSelection());
  }

  const open = e => {
    e.stopPropagation();
    props.onChange(door.open());
  }

  const renderDoor = () => {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.doorKnob} onClick={open}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={toggle}>
      <div className={`${styles.frame} ${selected}`}>
        { door.isClosed ? renderDoor() : door.hasGift ? <Gift /> : false }
      </div>
      <div className={styles.ground}></div>
    </div>
  );
}