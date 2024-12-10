import Character from './Character';
import Team from './Team';

const character1 = new Character('Арагорн', 'Человек', 100, 1, 50, 50);

const character2  = new Character('Леголас', 'Эльф', 100, 1, 50, 50);

const character3  = new Character('Гимли', 'Гном', 100, 1, 50, 50);

const newTeam = new Team();

newTeam.add(character1);
newTeam.add(character2);
newTeam.add(character3);

for (const character of newTeam) {
  console.log(character);
}