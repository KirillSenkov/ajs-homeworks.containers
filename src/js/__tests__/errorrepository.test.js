import ErrorRepository from '../errorrepository.js';

describe('testing class ErrorRepository (errorrepository.js)', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('should add and retrieve an error message', () => {
        errorRepo.add(404, 'Not Found');
        expect(errorRepo.translate(404)).toBe('Not Found');
    });

    test('should return "Unknown error" for an unknown code', () => {
        expect(errorRepo.translate(-404)).toBe('Unknown error');
    });

    test('should throw an error when adding a duplicate code', () => {
        errorRepo.add(400, 'Bad Request');
        expect(() => errorRepo.add(400, 'Another message')).toThrow('Error code 400 already exists.');
    });

    test('should store multiple errors correctly', () => {
        errorRepo.add(403, 'Forbidden');
        errorRepo.add(500, 'Internal Server Error');

        expect(errorRepo.translate(403)).toBe('Forbidden');
        expect(errorRepo.translate(500)).toBe('Internal Server Error');
    });
});
