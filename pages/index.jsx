import styles from '../styles/Home.module.css';

import { useState } from 'react';
import Link from 'next/link';

import Card from '../components/Card';
import NumberInput from '../components/NumberInput';

export default function Home() {
  const [amount, setAmount] = useState(3);
  const [doorWithGift, setDoorWithGift] = useState(1);

  return (
    <div className={styles.home}>
      <div>
        <Card bgColor="#C0392C">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Amount"
            value={amount}
            onChange={newValue => setAmount(newValue)}>
          </NumberInput>
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Door Gift"
            value={doorWithGift}
            onChange={newValue => setDoorWithGift(newValue)}>
          </NumberInput>
        </Card>
        <Card bgColor="#28A085">
          <Link href={`/game/${amount}/${doorWithGift}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
