const assert = require('assert');

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };
const lee = { id: 3, name: 'Lee' };
const users = [hong, lee, kim];

Array.prototype.mapBy = function (k) {
  return this.reduce((a, v) => [...a, v[k]], []);
};

Array.prototype.findBy = function (k, v) {
  return this.find((e) => e[k] === v);
};

Array.prototype.filterBy = function (k, v) {
  return this.filter((e) => e[k] === v);
};

Array.prototype.sortBy = function (c) {
  const [k, d] = c.split(':');
  return k && d
    ? [...this].sort((a, b) => (a[k] > b[k] ? -1 : 1))
    : [...this].sort((a, b) => (a[k] < b[k] ? -1 : 1));
};

assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy('name'), ['Hong', 'Lee', 'Kim']);
assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
// assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);
assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
// assert.deepStrictEqual(users.firstObject, hong);
// assert.deepStrictEqual(users.lastObject, kim);
