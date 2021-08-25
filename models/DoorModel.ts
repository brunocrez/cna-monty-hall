export default class DoorModel {
  #number: number;
  #isOpen: boolean;
  #hasGift: boolean;
  #isSelected: boolean;

  constructor(number, isOpen = false, hasGift = false, isSelected = false) {
    this.#number = number;
    this.#isOpen = isOpen;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
  }

  get number() {
    return this.#number;
  }

  get isOpen() {
    return this.#isOpen;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isClosed() {
    return !this.isOpen;
  }

  toggleSelection() {
    const isSelected = !this.isSelected;
    return new DoorModel(this.number, this.isOpen, this.hasGift, isSelected);
  }

  open() {
    const isOpen = true;
    return new DoorModel(this.number, isOpen, this.hasGift, this.isSelected);
  }

  unselect() {
    const isSelected = false;
    return new DoorModel(this.number, this.isOpen, this.hasGift, isSelected);
  }
}