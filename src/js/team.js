import Character from './character.js';

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add = function(pers) {
        if (!(pers instanceof Character)) {
            throw new Error('Only Character instances can be added.');
        }
        if (this.members.has(pers)) {
            throw new Error('This character is already in the team.');
        }
        this.members.add(pers);
    }

    addAll(...charList) {
        charList.forEach(char => {
            if (char instanceof Character) {
                this.members.add(char);
            }
        });
    }

    toArray = function() {
        return Array.from(this.members);
    }
}
