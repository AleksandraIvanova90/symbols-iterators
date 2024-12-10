import Character from './Character';

export default class Team {
  constructor() {
    this.characters = [];
    this.numberOfСharacters = 0;
  }

  add(character) {
    if (character instanceof Character) {
      this.characters.push(character);
      this.numberOfСharacters += 1;
    } else {
      throw new Error('Не валидный объект!');
    }
  }

  [Symbol.iterator]() {
    let current = 0;
    const { characters, numberOfСharacters } = this;
    return {
      next() {
        if (current < numberOfСharacters) {
          return {
            value: characters[current++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}