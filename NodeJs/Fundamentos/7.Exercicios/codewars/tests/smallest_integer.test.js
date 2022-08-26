const smallestInteger = require('../smallest_integer');

const arrays = [
  [1, 2, 3, 4, 5],
  [34, 15, 88, 2],
  [34, -345, -1, 100],
  [123, 7458, 42, 12635127],
  [
    259, 993, 78, 830, 191, 687, 494, 385, 419,
    645, 189, 714, 466, 852, 791, 541, 989, 442,
    8, 623, 583, 969, 295, 972, 619, 67, 208, 129,
    404, 724, 498, 105, 374, 257, 291, 669, 656, 477,
    175, 782, 612, 527, 418, 188, 195, 483, 250, 279,
    134, 803, 917, 139, 900, 609, 462, 260, 156, 855,
    810, 767, 226, 324, 407, 930, 964, 981, 893, 505,
    447, 327, 234, 976, 265, 92, 352, 263, 908, 607,
    480, 336, 734, 963, 772, 528, 94, 198, 657, 205,
    639, 167, 181, 550, 764, 482, 725, 690, 397, 311,
    255, 431,
  ],
];

test('Should return the smallest integer in the array', () => {
  expect(smallestInteger(arrays[0])).toBe(1);
  expect(smallestInteger(arrays[1])).toBe(2);
  expect(smallestInteger(arrays[2])).toBe(-345);
  expect(smallestInteger(arrays[3])).toBe(42);
  expect(smallestInteger(arrays[4])).toBe(8);
});
