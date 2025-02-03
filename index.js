class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  /* Podrías considerar convertir length en una propiedad calculada usando get. Esto elimina la necesidad de actualizar length manualmente cada vez que cambias items:
  get length() {
    return this.items.length;
  } */

  add(item) {
    this.items.push(item); //spread operator or concat don´t work for the test
    this.length = this.items.length; //ensure that the length is updated
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length - 1) throw new Error("OutOfBounds");
    if (this.length) return this.items[pos];
  }

  max() {
    if (!this.length) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (!this.length) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    const initialValue = 0;
    if (!this.length) return initialValue;
    return this.items.reduce((acc, currentNumber) => acc + currentNumber, initialValue);
  }

  avg() {
    if (!this.length) throw new Error("EmptySortedList");
    const avgValue = this.items.reduce((acc, currentNumber) => acc + currentNumber, 0) / this.length;
    return avgValue;
  }
}

module.exports = SortedList;
