/**
 * @fileoverview Simple example functions for testing JSDoc
 * @author Group 18
 * @version 1.0.0
 */

/**
 * Calculates the sum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Formats a greeting message
 * @param {string} name - The name to include in the greeting
 * @param {boolean} [formal=false] - Whether to use formal greeting
 * @returns {string} The formatted greeting
 * @example
 * // Returns "Hello, John!"
 * formatGreeting("John", false);
 * 
 * // Returns "Good day, Sarah."
 * formatGreeting("Sarah", true);
 */
function formatGreeting(name, formal = false) {
  if (formal) {
    return `Good day, ${name}.`;
  }
  return `Hello, ${name}!`;
}

module.exports = {
  add,
  formatGreeting
};
