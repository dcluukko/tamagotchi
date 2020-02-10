import { Student } from '../src/student.js';
import { exportAllDeclaration } from '@babel/types';

describe('Student', () => {
  let input;
  let student;
  jest.useFakeTimers();

  test('should create new Code-agatchi with name', () => {
    let input = 'Carol'
    let student = new Student(input);
    expect(student.name).toEqual('Carol');
  }); 
  beforeEach(() => {
    input = 'Carol';
    student = new Student(input);
  })
  test('should set energy to 10', () => {
    student.coffeeBreak();
    expect(student.energyLevel).toEqual(10);
  })
  test('should decrease energy over time',() => {
    student.setEnergy();
    jest.advanceTimersByTime(3001);
    expect(student.energyLevel).toEqual(7);
  })
});