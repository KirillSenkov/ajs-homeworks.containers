export default class Settings {
    constructor() {
        this.possibleValues = {
            'theme': ['dark', 'light', 'gray'],
            'music': ['trance', 'pop', 'rock', 'chillout', 'off'],
            'difficulty': ['easy', 'normal', 'hard', 'nightmare']
        }
        this.default = new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]);
        this.customSettings = new Map();
    }

    set = function(setting, value) {
        if (!this.default.has(setting)) {
            throw new Error('Invalid setting name.');
        }
        if (!this.possibleValues[setting].includes(value)) {
            throw new Error('Invalid setting value.');
        }
        if (this.default.get(setting) === value) {
            this.customSettings.delete(setting);
        } else {
            this.customSettings.set(setting, value);
        }
    }
    
    get settings() {
        return new Map([...this.default, ...this.customSettings]);
    }
}