import styles from '../styles/Card.module.css';

interface CardProps {
  bgColor?: string;
  children?: React.ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor: props.bgColor ?? '#FFF' }}>
      {props.children}
    </div>
  );
}