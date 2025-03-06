export default class Character {
    constructor(name, type, attack, defence, health) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой от 2 до 10 символов.');
        }
  
        if (!types.includes(type)) {
            throw new Error(`Некорректный тип персонажа: ${type}.`);
        }
  
        this.name = name;
        this.type = type;
        this.level = 1;
        this.health = health;
        this.attack = attack;
        this.defence = defence;
    }
  
    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить уровень мертвого персонажа.');
        }
        this.level += 1;
        this.health = 100;
        this.attack = Math.round(this.attack * 1.2);
        this.defence = Math.round(this.defence * 1.2);
    }
  
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
            if (this.health < 0) {
                this.health = 0;
            }
        }
    }
}