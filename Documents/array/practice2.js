const assert = require('assert');

function deleteArray(arr, ...args) {
  let copy = [...arr];
  let type = typeof args[0];

  switch (type) {
    case 'number':
      if (args.length === 1) copy.splice(args[0]);
      else copy.splice(args[0], args[1] - args[0]);
      return copy;
    case 'string':
      return arr.filter((obj) => obj[args[0]] !== args[1]);
    default:
      throw new Error('argument Error');
  }
}

const arr = [1, 2, 3, 4];

assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: 'Hong' };
const Kim = { id: 2, name: 'Kim' };
const Lee = { id: 3, name: 'Lee' };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'id', 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, 'name', 'Lee'), [Hong, Kim]);
