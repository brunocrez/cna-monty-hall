import styles from '../../../styles/Game.module.css';

import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// components
import Door from '../../../components/Door';

// functions
import { generateDoors, updateDoors } from '../../../functions/doors';

export default function Game() {
  const router = useRouter();

  const [doors, setDoors] = useState([]);
  const [isValidParam, setIsValidParam] = useState(false);

  useEffect(() => {
    const doors = Number(router.query.doors);
    const hasGift = Number(router.query.hasGift);

    const isValidDoors = doors >= 3 && doors <= 50;
    const isValidGift = hasGift >= 1 && hasGift <= doors;

    setIsValidParam(isValidDoors && isValidGift);
  }, [doors]);

  useEffect(() => {
    const doors = Number(router.query.doors);
    const hasGift = Number(router.query.hasGift);
    setDoors(generateDoors(doors, hasGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map(door => {      
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />;
    })
  }

  return (
    <div className={styles.game}>
      <div className={styles.doors}>
        { isValidParam ? renderDoors() : <h1>Please, check your values again!</h1> }
      </div>
      <div className={styles.buttons}>
        <Link href="/">
          <button className={styles.restartButton}>Restart Game</button>
        </Link>
      </div>
    </div>
  )
}