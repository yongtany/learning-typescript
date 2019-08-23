import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('yXngtanY');

const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(charactersCollection);

console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
console.log('==============');
console.log(sorter2.collection);
sorter2.sort();
console.log(sorter2.collection);
