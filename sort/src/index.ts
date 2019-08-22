class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;
    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j + 1];
          this.collection[j + 1] = this.collection[j];
          this.collection[j] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
