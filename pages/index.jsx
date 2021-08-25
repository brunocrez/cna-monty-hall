import { useState } from 'react';

// components
import Door from '../components/Door';

// functions
import { generateDoors, updateDoors } from '../functions/doors';

export default function Home() {
  const [doors, setDoors] = useState(generateDoors(3, 1));

  function renderDoors() {
    return doors.map(door => {      
      return <Door key={door.number} value={door} onChange={newDoor => setDoors(updateDoors(doors, newDoor))} />;
    })
  }

  return (
    <div style={{ display: "flex" }}>
      {renderDoors()}
    </div>
  )
}
