import styles from '../styles/NumberInput.module.css';

interface NumberInputProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

export default function NumberInput(props: NumberInputProps) {

  const dec = () => props.onChange(props.value - 1);

  const inc = () => props.onChange(props.value + 1);

  return (
    <div className={styles.numberInput}>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.value}>{props.value}</div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={dec}>-</button>
        <button className={styles.btn} onClick={inc}>+</button>
      </div>
    </div>
  );
}