import styles from '../styles/Game.module.css';

import { useState } from 'react';
import Link from 'next/link';

// components
import Door from '../components/Door';

// functions
import { generateDoors, updateDoors } from '../functions/doors';

export default function Game() {
  const [doors, setDoors] = useState(generateDoors(5, 2));

  function renderDoors() {
    return doors.map(door => {      
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />;
    })
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        {renderDoors()}
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button className={styles.restartButton}>Restart Game</button>
        </Link>
      </div>
    </div>
  )
}