import canIterate from '../canIterate.js';

test.each([
  ['Array', new Array(), true],
  ['Map', new Map(), true],
  ['Set', new Set(), true],
  ['Null', null, false],
  ['Integer', 10, false],
  ['Text', 'Netology', true],
])('testing canIterate function with %s object', (_, object, expected) => {
  const result = canIterate(object);
  expect(result).toBe(expected);
});
