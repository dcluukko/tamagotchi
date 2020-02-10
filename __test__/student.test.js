import { Student } from '../src/student.js';

describe('Student', () => {
    test('should create new Code-agatchi with name', () => {
        let input = 'Carol'
        let student = new Student(input);
        expect(student.name).toEqual('Carol');
    }); 
    let input;
    let student;
    beforeEach(() => {
        input = 'Carol';
        student = new Student(input);
    })
    test('should set energy to 10', () => {
       // student.coffeeBreak();
        expect(student.energy).toEqual(10);
    })
});