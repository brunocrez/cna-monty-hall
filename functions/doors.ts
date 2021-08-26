import DoorModel from '../models/DoorModel';

export function generateDoors(length: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorWithGift;
    return new DoorModel(number, false, hasGift, false);
  });
}

export function updateDoors(doors: DoorModel[], updatedDoor: DoorModel): DoorModel[] {
  return doors.map(currentDoor => {
    const currentEqualsToUpdated = currentDoor.number === updatedDoor.number;

    if (currentEqualsToUpdated) {
      return updatedDoor;
    } else {
      return updatedDoor.isOpen ? currentDoor : currentDoor.unselect();
    }
  });
}