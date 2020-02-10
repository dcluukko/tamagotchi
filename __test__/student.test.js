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
    jest.advanceTimersByTime(1000);
    expect(student.energyLevel).toEqual(10);
  })
  test('should decrease energy over time',() => {
    student.life();
    jest.advanceTimersByTime(3001);
    expect(student.energyLevel).toEqual(7);
  })
  test('timer should stop if any levels reach zero', () => {
    student.life();
    jest.advanceTimersByTime(12000);
    expect(student.energyLevel).toEqual(0)
  })
  test('should level up to level 1 after 20 seconds', () => {
    student.leveling();
    jest.advanceTimersByTime(20000.1)
    expect(student.energyLevel).toEqual(20)
  })
});