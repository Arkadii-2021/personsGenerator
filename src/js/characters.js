export class Character {
  constructor() {
    this.health = 100;
    this.level = 1;
  }
}

export class Bowerman extends Character {
  constructor(health, level) {
    super();
    this.name = 'bowerman';
    this.type = 'Bowerman';
    this.attack = 25;
    this.defence = 25;
  }
}
export class Swordsman extends Character {
  constructor(health, level) {
    super();
    this.name = 'swordsman';
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
export class Magician extends Character {
  constructor(health, level) {
    super();
    this.name = 'magician';
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
