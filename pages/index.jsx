import styles from '../styles/Home.module.css';

import Link from 'next/link';

import Card from '../components/Card';

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <Card bgColor="#C0392C">
          <h1>Monty Hall</h1>
        </Card>
        <Card />
      </div>
      <div>
        <Card />
        <Card bgColor="#28A085">
          <Link href={`/game/4/2`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
