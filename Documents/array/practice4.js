const assert = require('assert');

const arr = [1, 2, 3, true];
const ret1 = arr.map((ele) => ele.toString());

assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);

// const classNames = (...args) =>
//   args.reduce((acc, val) => `${acc.trim()} ${val}`, '');

const classNames = (...args) =>
  args.reduce(
    (acc, val) => `${acc}${val && acc !== '' ? `${' ' + val}` : val}`,
    ''
  );

const ret2 = classNames('', 'a b c', 'd', '', 'e', '');

assert.strictEqual(ret2, 'a b c d e');
