import { Bowerman, Swordsman, Magician } from './characters';

class Team {
  constructor() {
    this.characterType = new Set();
  }

  addAll(...characters) {
    characters.forEach((character) => this.characterType.add(character));
  }

  * [Symbol.iterator]() {
    yield* this.characterType;
  }
}

const teamHeroes = new Team();

const bowerman = new Bowerman();
const swordsman = new Swordsman();
const magician = new Magician();

teamHeroes.addAll(bowerman, swordsman, magician);

const personGenerator = teamHeroes[Symbol.iterator]();

console.log(personGenerator.next().value);
console.log(personGenerator.next().value);
console.log(personGenerator.next().value);
console.log(personGenerator.next().value);
