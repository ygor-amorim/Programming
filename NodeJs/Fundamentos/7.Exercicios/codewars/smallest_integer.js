/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

function smallestInteger(array) {
  let smallest = array[0];
  for (let i = 0; i <= array.length - 1; i += 1) {
    smallest = smallest < array[i]
      ? smallest
      : array[i];
  }
  return smallest;
}

// return array.sort((a, b) => return a - b)[0];
// Low performance, as it has to sort a whole array
// just to get the smallest number, and it changes the
// initial array

module.exports = smallestInteger;
