const assert = require('assert');

const reduce = (arr, fn, init) => {
  let acc;
  // if (arguments[1] !== Function) return undefined;
  // if (arguments[0] !== Array) return undefined;
  if (init === undefined) {
    acc = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      acc = fn(acc, arr[i]);
    }
  } else {
    acc = init;
    arr.forEach((_, i) => {
      acc = fn(acc, arr[i]);
    });
  }

  return acc;
};

// const a10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// assert.deepStrictEqual(
//   reduce(a10, (acc, cur) => acc + cur),
//   a10.reduce((acc, cur) => acc + cur)
// );

// const kim = { id: 2, name: 'kim' };
// const lee = { id: 3, name: 'Lee' };
// const park = { id: 4, name: 'Park' };
// const user = [kim, lee, park];
// assert.deepStrictEqual(
//   reduce(user, (acc, user) => acc + user.name),
//   user.reduce((acc, user) => acc + user.name)
// );

// ## keyPair

// const keyPair = (arr, target) => {
//   let table = {};
//   let diff;
//   for (let i = 0; i < arr.length; i += 1) {
//     diff = target - arr[i];

//     if (!table.hasOwnProperty(diff)) table[diff] = i;

//     if (table.hasOwnProperty(arr[i])) {
//       return [table[arr[i]], i];
//     }
//   }
// };

// assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
// assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
// assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);

// class Emp {
//   firstName;
//   lastName;
//   constructor() {
//     return new Proxy(this, {
//       get(target, prop) {
//         if (prop === 'fullName') {
//           return `${target.firstName} ${target.lastName}`;
//         }

//         return target[prop];
//       },

//       set(target, prop, val) {
//         if (prop === 'fullName') {
//           const [firstName, lastName] = val.split(' ');
//           if (!lastName) {
//             target.lastName = firstName.toUpperCase();
//             return;
//           }
//           target.firstName = firstName;
//           target.lastName = lastName.toUpperCase();
//         }

//         return (target[prop] = val); // return이 꼭 필요한지?
//       },
//     });
//   }
// }

// const hong = new Emp();
// hong.fullName = 'Kildong Hong';
// assert.strictEqual(hong.fullName, 'Kildong HONG');
// hong.fullName = 'Lee';
// assert.strictEqual(hong.fullName, 'Kildong LEE');

const cal = () => {};

const f = new Date(2025, 7, 2).getDay();

const l = new Date(2025, 8, 0).getDate();

// console.log(f, l);

let ret = ' '.repeat(f * 3);

for (let i = 1; i <= l; i += 1) {
  if (ret.length % 21 === 0 || ret.length % 53 === 0) ret += '\n'; // 예외사항 체크, 잘 돌아가고 있는건 뭔지 확인할 것.

  ret += i.toString().padStart(3, ' ');
}

// console.log(ret);

const d1 = new Date(1970, 0, 1);
const d2 = new Date(1970, 0, 2);

// console.log(d2 - d1);

// console.log(Math.floor(Math.random() * 10) + 1);

// console.log(new Date(2025, 5, 29).getDay());

const now = new Date();
// const after = new Date(now);
// after.setDate(now.getDate() + 100);
// console.log(after.getMonth() + 1, after.getDate());

now.setDate(now.getDate() + 100);
// console.log(now);

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(cb);
    timer = setTimeout(cb, delay);
  };
};

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];

const searchByKoreanInitialSound = (arr, conso) => {};

const han = '가나다라마바사아자차카타파하';
const con = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ';
const hiut = '힣';
const initSound = (arr, conso) => {
  const r = [...conso].reduce((acc, a) => {
    const idx = con.indexOf(a);
    if (idx === -1) return a;
    const s = han[idx];
    const e =
      idx !== con.length - 1
        ? han[idx + 1].charCodeAt(0) - 1
        : hiut.charCodeAt(0);
    return `${acc}[${s}-${String.fromCharCode(e)}]`;
  }, '');

  const regExp = new RegExp(r);
  return arr.filter((e) => regExp.test(e));
};

// console.log(initSound(s, 'ㄱ1ㅅ'));

const telfmt = (tel) => {
  const len = tel?.length ?? 0;

  if (len <= 8) return tel.replace(/(\d{1,4})(\d{4})/, '$1-$2');

  const A = tel.startsWith('02') ? 2 : len >= 12 ? len - 8 : 3;
  const B = len - (A + 4);

  const regExp = new RegExp(`(\\d{${A}})(\\d{${B}})(\\d{4})`);
  return tel.replace(regExp, '$1-$2-$3');
};

// const hong = { id: 1, name: 'Hong' };
// const kim = { id: 2, name: 'Kim' };
// const lee = { id: 3, name: 'Lee' };
// const users = [hong, lee, kim];

Array.prototype.mapBy = function (k) {
  return this.map((e) => e[k]);
};

Array.prototype.findBy = function (k, v) {
  return this.find((e) => e[k] === v);
};

Array.prototype.filterBy = function (k, v) {
  return this.filter((e) => e[k === v]);
};

Array.prototype.rejectBy = function (k, v) {
  return this.filter((e) => e[k !== v]);
};

Array.prototype.sortBy = function (k) {
  if (k.includes(':')) {
    const [id, direc] = k.split(':');
    return direc === 'desc'
      ? this.sort((a, b) => (b[id] < a[id] ? -1 : 1))
      : this.sort((a, b) => (a[id] < b[id] ? 1 : -1));
  }
  return this.sort((a, b) => (a[k] < b[k] ? -1 : 1));
};

Object.defineProperty(Array.prototype, 'firstObject', {
  get() {
    return this[0];
  },
});

Object.defineProperty(Array.prototype, 'lastObject', {
  get() {
    return this[this.length - 1];
  },
});

Array.prototype.uniqBy = function (k) {
  //const na = this.reduce((a, c) => [...a, c[k]], []);
  // console.log(na);
  return [...new Set(this.map((e) => e[k]))];
};

// console.log(users.mapBy('id'));
// console.log(users.findBy('name', 'Kim'));
// console.log(users.sortBy('name'));
// console.log(users.sortBy('name:desc'));
// console.log(users.firstObject);
// console.log(users.lastObject);

const hong = { id: 1, name: 'Hong', dept: 'HR' };
const kim = { id: 2, name: 'Kim', dept: 'Server' };
const lee = { id: 3, name: 'Lee', dept: 'Front' };
const park = { id: 4, name: 'Park', dept: 'HR' };
const ko = { id: 7, name: 'Ko', dept: 'Server' };
const loon = { id: 6, name: 'Loon', dept: 'Sales' };
const choi = { id: 5, name: 'Choi', dept: 'Front' };
const users = [hong, kim, lee, park, ko, loon, choi];

// console.log(users.uniqBy('dept'));

class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args || [];
  }

  get _arr() {
    return this.#arr;
  }

  get _len() {
    return this.#arr.length;
  }

  toString() {
    if (this.#isStack()) {
      console.log(this.#arr);
    }
  }

  #isStack() {
    return this.constructor.name === 'Stack';
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length - 1; i += 1) yield this.#arr[i];
  }
}

class Stack extends Collection {
  push(v) {
    super._arr.push(v);
    return this;
  }

  *[Symbol.iterator]() {
    for (let i = this._len; i >= 0; i -= 1) {
      yield this._arr[i];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }
}

const se = new Stack(1, 2);
// se.toString();
se.push(3);

console.log(se.iterator().next());

// console.log([...se]);
// se.toString();

class Queue extends Collection {
  enqueue(v) {
    super._arr.unshift(v);
    return this;
  }

  dequeue() {
    return this._arr.pop();
  }

  *[Symbol.iterator]() {
    for (let i = this._arr.length - 1; i >= 0; i -= 1) yield this._arr[i];
  }

  iterator() {
    return this[Symbol.iterator]();
  }
}

class ArrayList extends Collection {
  add(v, i) {
    if (i === undefined) this._arr.push(v);
    else this._arr.splice(idx, 0, v);
  }

  remove(idx) {
    return this._arr.splice(idx);
  }

  indexOf(val) {
    return this._arr.indexOf(val);
  }

  set(idx, val) {
    this._arr[idx] = val;
  }

  get(val) {
    return this._arr[this.indexOf(val)];
  }

  static listToArray(list) {
    const arr = [];
    let node = list;
    while (true) {
      arr.push(node.value);
      node = node?.rest;
      if (!node) break;
    }
    return arr;
  }
  static arrayToList(arr) {
    let node = { value: arr[arr.length - 1] };
    for (let i = arr.length - 2; i >= 0; i -= 1) {
      node = { value: arr[i], rest: node };
    }
    return node;
  }

  toString() {
    return ArrayList.arrayToList(this._arr);
  }

  print() {
    console.log(ArrayList.arrayToList(this._arr));
  }
}

const li = new ArrayList(1, 2, 3, 4, 5);
// console.log(
//   ArrayList.listToArray({ value: 1, rest: { value: 2, rest: undefined } })
// );

// li.print();

// function memo(fn) {
//   const t = {};
//   return function b(k) {
//     return t[k] || (t[k] = fn(k));
//   };
// }

// const m = memo(function a(n) {
//   if (n === 1) return 1;
//   return n * m(n - 1);
// });

// console.log(m(3));

const mf = (function () {
  let table = { 1: 1, 2: 3 };
  let nn = 2;
  let bp = 0;
  return function b(n) {
    if (table[n] !== undefined) return table[n];
    try {
      table[++nn] = b(nn - 1) + nn;
      bp = nn;
      return b(n);
    } catch (error) {
      console.log(error.message);
      console.log(bp);
      return;
    }
  };
})();

// console.log(mf(10000));

class Collection2 {
  #arr;
  constructor(...arr) {
    this.#arr = Array.isArray(arr[0]) ? arr[0] : arr;
    console.log(this.#arr);
  }

  *[Symbol.iterator]() {
    for (let i = 0; i <= this.#arr.length; i += 1) {
      yield this.#arr[i];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }
}

// class ArrayList2 extends Collection2 {
//   static listToArray(li) {
//     let ret = [];
//     let node = li;
//     while (true) {
//       ret.push(node.value);
//       node = node?.rest;

//       if (!node) break;
//     }
//     return ret;
//   }
//   static arrayToList(ar) {}
// }

// const al = new ArrayList2([1, 2, 3]);
// const al2 = new ArrayList2(3, 4, 5);
// // console.log(al);
// const aaa = ArrayList2.listToArray({
//   value: 3,
//   rest: { value: 5, rest: undefined },
// });
// console.log(aaa);

const cal2 = () => {};

const fd = new Date(2024, 9).getDay();
const ld = new Date(2024, 10, 0).getDate();

let day = ' '.repeat(fd * 3);
for (let i = 1; i <= ld; i += 1) {
  day += i.toString().padStart(3, ' ');
}

const print = (str) => {
  let cnt = 0;
  for (let i = 0; i < 5; i += 1) {
    console.log(str.slice(cnt, cnt + 21));
    cnt += 21;
  }
};

// console.log(`2024-10`.toString().padStart(15, ' '));
// print(day);
// console.log(day);
// console.log(fd, ld);

const telfmt2 = (tel) => {
  let len = tel.length;

  if (len <= 8) return tel.replace(/(\d{4})(\d{4})/, '$1-$2');
  const A = tel.startsWith('02') ? 2 : len >= 12 ? len - 8 : 3;
  const B = tel.length - (A + 4);

  const r = `(\\d{${A}})(\\d{${B}})(\\d{4})`;
  const regExp = new RegExp(r);

  return tel.replace(regExp, '$1-$2-$3');
};

// console.log(telfmt2('0304928345'));
// console.log(telfmt2('04928345'));

const keyPair2 = (arr, target) => {
  let table = {};
  let diff;
  for (let i = 0; i <= arr.length; i += 1) {
    diff = Math.abs(target - arr[i]);
    if (!table.hasOwnProperty(diff)) table[diff] = i;
    if (table.hasOwnProperty(arr[i])) return [table[arr[i]], i];
  }
};

// console.log(keyPair2([1, 3, 4, 5], 7));

class Collection25 {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
    console.log(this.#arr);
  }

  get _arr2() {
    return this.#arr;
  }

  get _len2() {
    return this.#arr.length;
  }
}

class Stack25 extends Collection25 {
  print() {
    console.log(super._arr2);
  }

  *[Symbol.iterator]() {
    for (let i = this._len2; i >= 0; i -= 1) {
      yield this._arr2[i];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }
}

const sss = new Stack25(1, 2, 3, 4, 5);
// console.log([...sss]);
