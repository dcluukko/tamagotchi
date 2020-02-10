import { Student } from '../src/student.js';

describe('Student', () => {
    test('should create new Code-agatchi with name', () => {
        let input = 'Carol'
        let student = new Student(input);
        
        expect(student.name).toEqual('Carol');
    }); 
});