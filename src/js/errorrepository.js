export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    add(code, message) {
        if (this.errors.has(code)) {
            throw new Error(`Error code ${code} already exists.`);
        }
        this.errors.set(code, message);
    }

    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }
}
