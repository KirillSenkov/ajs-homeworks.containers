import Settings from '../settings.js';

describe('testing class Settings (settings.js)', () => {
    let settings;

    beforeEach(() => {
        settings = new Settings();
    });

    test('should return default settings from the begining', () => {
        expect(settings.settings).toEqual(new Map([
            ['theme', 'dark'],
            ['music', 'trance'],
            ['difficulty', 'easy']
        ]));
    });

    test('should change a setting', () => {
        settings.set('theme', 'light');
        expect(settings.settings.get('theme')).toBe('light');
    });

    test('should override default settings with custom ones and should remove a custom setting if it matches default', () => {
        settings.set('music', 'rock');
        expect(settings.settings.get('music')).toBe('rock');

        settings.set('music', 'trance');
        expect(settings.customSettings.has('music')).toBeFalsy();
    });

    test('should throw error for invalid setting', () => {
        expect(() => settings.set('invalid', 'value')).toThrow('Invalid setting name.');
    });

    test('should throw error for invalid value', () => {
        expect(() => settings.set('music', 'value')).toThrow('Invalid setting value.');
    });
});
