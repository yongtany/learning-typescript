class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (var i = 0; i < length - 1; i++) {
      for (var j = 0; j < length - i - 1; j++) {
        // All of this only works if collection is number[]
        // If collection is an array of numbers
        if (this.collection instanceof Array) {
          // Type Guards
          // collection === number []
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j + 1];
            this.collection[j + 1] = this.collection[j];
            this.collection[j] = leftHand;
          }
        }

        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to compare and Swap characters in a string
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
