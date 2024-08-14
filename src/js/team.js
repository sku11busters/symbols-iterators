class Team {
    constructor() {
      this.characters = [];
    }
  
    add(character) {
      this.characters.push(character);
    }
  
    [Symbol.iterator]() {
      let index = 0;
      const characters = this.characters;
  
      return {
        next: () => {
          
          if (index < characters.length) {
            return { value: characters[index++], done: false };
          }

          return { done: true };
        }
      };
    }
}
  
const char1 = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
};
  
const char2 = {
    name: 'Мечник',
    type: 'Swordsman',
    health: 60,
    level: 1,
    attack: 50,
    defence: 20
};
  
const team = new Team();

team.add(char1);
team.add(char2);

for (const character of team) {
    console.log(character); 
}