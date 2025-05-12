// Function Unit Tests
import { subtract, add } from '../code-to-unit-tests/unit.test';

test('subtracts 2 - 1 to equal 1', () => {
    expect(2 - 1).toBe(1);
  });

test('add 2 + 1 to equal 3', () => {
  expect(add(2,1)).toBe(3);
});