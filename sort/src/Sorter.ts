export class Sorter {
  constructor(public collection: Number[]) {}

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
