// Function Unit Tests
import { subtract } from '../code-to-unit-tests/unit.test';

test('subtracts 2 - 1 to equal 1', () => {
    expect(2 - 1).toBe(1);
  });

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2,1)).toBe(1);
});