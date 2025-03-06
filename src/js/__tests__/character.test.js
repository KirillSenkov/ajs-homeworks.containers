import Character from '../character.js';

test('wrong name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов.');
});

test('wrong type', () => {
    expect(() => new Character('Кларк', 'Superman')).toThrow('Некорректный тип персонажа: Superman.');
});

test('levelUp', () => {
    const hero = new Character('Лучник', 'Bowman', 25, 25, 100);
    hero.levelUp();
    expect(hero.level).toBe(2);
    expect(hero.health).toBe(100);
    expect(hero.attack).toBe(30);
    expect(hero.defence).toBe(30);
});

test('levelUp of corpse', () => {
    const hero = new Character('Маг', 'Magician', 10, 40, 100);
    hero.health = 0;
    expect(() => hero.levelUp()).toThrow('Нельзя повысить уровень мертвого персонажа.');
});

test('taking damage', () => {
    const hero = new Character('Воин', 'Swordsman', 40, 10, 100);
    hero.damage(50);
    expect(hero.health).toBe(55);
});

test('taking critical', () => {
    const hero = new Character('Воин', 'Swordsman', 40, 10, 100);
    hero.damage(999999);
    expect(hero.health).toBe(0);
});

test('taking damage by corpse', () => {
    const hero = new Character('Маг', 'Magician', 10, 40, 100);
    hero.health = 0;
    hero.damage(30);
    expect(hero.health).toBe(0);
});


