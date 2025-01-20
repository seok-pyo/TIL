const reduce = function (val, fn, init) {
  let acc;
  if (typeof fn !== 'function') return `${arguments[1]} is not a function`;
  if (!Array.isArray(val)) return `${arguments[0]} is not a Array`;

  if (init === undefined) {
    acc = val[0];
    val.forEach((_, i) => (acc = fn(acc, val[i])));
  } else {
    acc = init;
    val.forEach((_, i) => (acc = fn(acc, val[i])));
  }

  return acc;
};

console.log(reduce([1, 2, 3], 0));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
console.log(reduce([2, 2, 2], (a, b) => a * b));
console.log(reduce([3, 3, 3], (a, b) => a * b, 0));
