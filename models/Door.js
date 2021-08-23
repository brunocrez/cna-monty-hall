export default class Door {
  #number;
  #isOpen;
  #hasGift;
  #isSelected;

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

  toggleSelection() {
    const isSelected = !this.isSelected;
    return new Door(this.number, this.isOpen, this.hasGift, isSelected);
  }

  open() {
    const isOpen = true;
    return new Door(this.number, isOpen, this.hasGift, this.isSelected);
  }

  unselect() {
    const isSelected = false;
    return new Door(this.number, isOpen, this.hasGift, isSelected);
  }
}