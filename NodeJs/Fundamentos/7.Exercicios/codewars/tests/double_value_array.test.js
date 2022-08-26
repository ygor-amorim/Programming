const maps = require('../double_value_array');

const arrays = [
  [1, 2, 3],
  [2, 4, 6],
  [4, 8, 12],
  [8, 16, 24],
  [16, 32, 48],
  [2, 2, 2],
];

test('Should double each element inside an array', () => {
  expect(maps(arrays[0])).toStrictEqual([2, 4, 6]);
  expect(maps(arrays[1])).toStrictEqual([4, 8, 12]);
  expect(maps(arrays[2])).toStrictEqual([8, 16, 24]);
  expect(maps(arrays[3])).toStrictEqual([16, 32, 48]);
  expect(maps(arrays[4])).toStrictEqual([32, 64, 96]);
  expect(maps(arrays[5])).toStrictEqual([4, 4, 4]);
});
