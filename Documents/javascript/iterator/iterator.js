// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// function* add() {
//   const f = yield '첫 번째 수?';
//   const s = yield '두 번째 수?';
//   return f + s;
// }

// const itAdd = add();

// // next()를 실행하면 Iterator 객체를 반환한다.

// // console.log(itAdd.next().value);
// // console.log(itAdd.next(1).value);
// // console.log(itAdd.next(6).value);

// // itAdd.next();
// // itAdd.next();
// // itAdd.next();

// // console.log(itAdd.next(1));
// // console.log(itAdd.next(2));

// const cities = ['부산', '대구', '대전', '서울'];
// // const iter = cities.values();
// const iter = itObj[Symbol.dispose]();
// console.log(iter.value);
// // console.log(iter);
// // console.log(iter2);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// v00000 iterator/iterable
const itObj = {};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// class ItDog extends Dog {
//   [Symbol.iterator]() {
//     console.log('this one');
//     return 'ag'.split('').values();
//   }
// }

// const idog = new ItDog('t, d, a');
// console.log(idog);
// console.log([...idog]);

//

// function* gener() {
//   const x = yield 1;
//   const y = yield x + 10;
//   yield console.log('x y =', x, y);
//   return x + y;
// }

// const it3 = gener();

// console.log(it3.next());
// console.log(it3.next(3));
// console.log(it3.next(5));

// class ItDog2 extends Dog {
//   [Symbol.iterator]() {
//     let idx = 0;
//     const names = this.name.split(/,\s?/);
//     return {
//       next() {
//         return { value: names[idx++], done: idx > names.length };
//       },
//     };
//   }
// }

// class ItDog2 extends Dog {
//   *[Symbol.iterator]() {
//     const names = this.name.split(/,\s?/);
//     for (let i = 0; i < names.length; i++) {
//       yield names[i];
//     }
//   }
// }

// const idog2 = new ItDog2('t, n, m');
// for (const d of idog2) console.log(d);

// console.log([...idog2]);

function* gen() {
  const x = yield 1;
  const y = yield x + 10;
  console.log('>', x, y);
  return x + y;
}

const it3 = gen();
console.log(it3.next());
console.log(it3.next(10));

console.log(it3.next(5));

//

const arr = [1, 2, 3];

let node2;
for (let i = arr.length - 1; i >= 0; i -= 1) {
  node2 = { value: arr[i], rest: node2 };
}

console.log(node2);
