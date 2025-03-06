import Team from '../team.js';
import Character from '../character.js';

describe('testing Team class (team.js)', () => {
    test('add() should add a new character', () => {
        const team = new Team();
        const hero = new Character('some hero', 'Undead');

        team.add(hero);

        expect(team.members.has(hero)).toBeTruthy();
    });

    test('add() should throw an error if character is not a Character', () => {
      const team = new Team();
      const hero = {};

      expect(() => team.add(hero)).toThrow('Only Character instances can be added.');
  });

    test('add() should throw an error if character is already in the team', () => {
        const team = new Team();
        const hero = new Character('some hero', 'Undead');

        team.add(hero);

        expect(() => team.add(hero)).toThrow('This character is already in the team.');
    });

    test('addAll() should add multiple characters without duplicates', () => {
        const team = new Team();
        const hero1 = new Character('hero 1', 'Undead');
        const hero2 = new Character('hero 2', 'Undead');
        const hero3 = new Character('hero 3', 'Undead');
        const not_hero = {};

        team.addAll(hero1, hero2, hero3, hero1, hero2);
        team.addAll(not_hero);

        expect(team.members.size).toBe(3);
        expect(team.members.has(hero1)).toBeTruthy();
        expect(team.members.has(hero2)).toBeTruthy();
        expect(team.members.has(hero3)).toBeTruthy();

    });

    test('toArray() should return an array of characters', () => {
        const team = new Team();
        const hero1 = new Character('hero 1', 'Undead');
        const hero2 = new Character('hero 2', 'Undead');

        team.addAll(hero1, hero2);
        const result = team.toArray();

        expect(result).toEqual([hero1, hero2]);
    });
});
