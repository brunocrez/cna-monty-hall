// import Gift from '../components/Gift';
import { useState } from 'react';
import Door from '../components/Door';

// models
import DoorModel from '../models/DoorModel';

export default function Home() {
  const [door, setDoor] = useState(new DoorModel(1));

  return (
    <div style={{ display: "flex" }}>
      <Door value={door} onChange={newDoor => setDoor(newDoor)} />
    </div>
  )
}
