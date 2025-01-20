const arr = [1, -2, 3, 4, 5];

const square = (arr) => {
  return arr.map((a) => a ** 2);
};

const sqrt = (arr) => {
  const check = arr.map((ele) => {
    if (ele < 0) return undefined;
    else return ele;
  });
  return check.map((a) => Math.floor(Math.sqrt(a)));
};

const cube = (arr) => {
  return arr.map((a) => a ** 3);
};

let fns = [sqrt, square, cube];
let fns2 = [cube, square, sqrt];
let fns3 = [square, cube, sqrt];

console.log(fns.reduce((arr, func) => func(arr), arr));
console.log(fns2.reduce((arr, func) => func(arr), arr));
console.log(fns3.reduce((arr, func) => func(arr), arr));
