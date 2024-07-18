// Index
// 객체 지향 프로그래밍 | 이터레이터와 제너레이터 | 맵과 셋 | Number, Math, Date | 문자열과 정규표현식

const assert = require('assert');

// 객체 지향 프로그래밍 ################################################ 198p ~ 201p

// const handler = {
//   get(target, prop) {
//     if (prop === 'fullName') {
//       return `${target.firstName} ${target.lastName}`;
//     } else {
//       return target[prop] ? target[prop] : undefined;
//     }
//   },
//   set(target, prop, value) {
//     if (prop === 'fullName') {
//       const [f, l] = value.split(' ');
//       target.firstName = f && l ? f : target.firstName;
//       target.lastName = f && l ? l.toUpperCase() : f.toUpperCase();
//     } else {
//       target[prop] = value;
//     }
//     return true;
//   },
// };

// class Emp {
//   constructor() {
//     this.firstName;
//     this.lastName;
//   }
// }

// const hong3 = new Emp();
// hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
// console.log(hong3.fullName); // 'Kildong HONG' 출력하면 통과!
// hong.fullName = 'Lee';
// console.log(hong3.firstName, hong3.lastName);

// const hong3 = new Proxy(new Emp(), handler);
// hong3.fullName = 'Kildong Hong';
// console.log(hong3.fullName); // 'Kildong HONG' 출력하면 통과!
// hong3.fullName = 'Lee';
// console.log(hong3.firstName, hong3.lastName);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const hong = { id: 1, name: 'Hong' };
// const kim = { id: 2, name: 'Kim' };
// const lee = { id: 3, name: 'Lee' };
// const users = [hong, lee, kim];

// Array.prototype.mapBy = function (k) {
//   return this.reduce((a, v) => [...a, v[k]], []);
// };

// Array.prototype.findBy = function (k, v) {
//   return this.find((e) => e[k] === v);
// };

// Array.prototype.filterBy = function (k, v) {
//   return this.filter((e) => e[k] === v);
// };

// Array.prototype.rejectBy = function (k, v) {
//   return this.filter((e) => e[k] !== v);
// };

// Array.prototype.sortBy = function (c) {
//   const [k, d] = c.split(':');
//   return k && d
//     ? [...this].sort((a, b) => (a[k] > b[k] ? -1 : 1))
//     : [...this].sort((a, b) => (a[k] < b[k] ? -1 : 1));
// };

// Object.defineProperties(Array.prototype, {
//   firstObject: {
//     get: function () {
//       return this[0];
//     },
//   },
//   lastObject: {
//     get: function () {
//       return this[this.length - 1];
//     },
//   },
// });

// assert.deepStrictEqual(users.mapBy('id'), [1, 3, 2]);
// assert.deepStrictEqual(users.mapBy('name'), ['Hong', 'Lee', 'Kim']);
// assert.deepStrictEqual(users.filterBy('id', 2), [kim]);
// assert.deepStrictEqual(users.rejectBy('id', 2), [hong, lee]);
// assert.deepStrictEqual(users.findBy('name', 'Kim'), kim);
// assert.deepStrictEqual(users.sortBy('name'), [hong, kim, lee]);
// assert.deepStrictEqual(users.sortBy('name:desc'), [lee, kim, hong]);
// assert.deepStrictEqual(users.firstObject, hong);
// assert.deepStrictEqual(users.lastObject, kim);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// class Stack extends Array {
//   constructor(arg) {
//     arg ? super(...arg) : super();
//   }

//   push(arg) {
//     this[this.length] = arg;
//   }

//   pop() {
//     if (this.length === 0) return undefined;

//     const last = this[this.length - 1];
//     this.length--;
//     return last;
//   }
// }

// class Queue extends Array {
//   constructor(arg) {
//     arg ? super(arg) : super();
//   }

//   enqueue(arg) {
//     this[this.length] = arg;
//   }

//   dequeue() {
//     if (this.length === 0) return undefined;

//     const first = this[0];
//     this.splice(0, 1);

//     return first;
//   }
// }

// const stack = new Stack([1, 2]);

// const s1 = new Stack();
// s1.push(34);
// s1.push(21);
// console.log(s1.pop());
// console.log(s1);

// const queue = new Queue();
// queue.enqueue(3);
// queue.enqueue(30);
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// class Collection {
//     constructor(arg) {
//       if (Array.isArray(arg)) {
//         arg?.forEach((item, index) => {
//           this[index] = item;
//         });
//         this._length = arg.length;
//       } else {
//         this[0] = arg;
//         this._length = 1;
//       }
//     }

//     clear(data) {
//       for (let i = 0; i < data._length; i += 1) {
//         delete data[i];
//       }
//       data._length = 0;
//     }

//     toArray(data) {
//       let arr = [];
//       for (let i = 0; i < data._length; i += 1) {
//         arr[i] = data[i];
//       }
//       return arr;
//     }

//     print(data) {
//       for (let i = 0; i < data._length; i += 1) {
//         console.log(data[i].toString());
//       }
//     }

//     remove() {
//       if (this instanceof Stack) {
//         if (this._length === 0) return undefined;
//         delete this[_length];
//         this._length--;
//       } else if (this instanceof Queue) {
//         if (this._length === 0) return undefined;
//         delete this[0];
//         this._length--;
//         for (let i = 0; i < this._length; i += 1) {
//           this[i] = this[i + 1];
//         }
//         delete this[this._length];
//       }
//     }

//     get isEmpty() {
//       if (this._length === 0) return true;
//       return false;
//     }

//     get peek() {
//       if (this instanceof Stack) {
//         if (this._length === 0) return undefined;
//         return this[this._length - 1];
//       } else if (this instanceof Queue) {
//         if (this._length === 0) return undefined;
//         return this[0];
//       }
//     }

//     get poll() {
//       if (this instanceof Stack) {
//         if (this._length === 0) return undefined;
//         const last = this[this._length - 1];
//         delete this[this._length - 1];
//         this._length--;
//         return last;
//       } else if (this instanceof Queue) {
//         if (this._length === 0) return undefined;
//         const first = this[0];
//         delete this[0];
//         this._length--;

//         return first;
//       }
//     }

//     set length(size) {
//       if (this._length === 0) this._length = undefined;
//       this._length = size;
//     }

//     get length() {
//       if (this._length === 0) return undefined;
//       return this._length;
//     }
//   }

//   class Stack extends Collection {
//     constructor(arg) {
//       super(arg);
//     }

//     push(data) {
//       this[this._length] = data;
//       this._length++;
//     }

//     pop() {
//       if (this._length === 0) return undefined;

//       const last = this[this._length - 1];
//       this._length--;
//       delete this[this._length - 1];
//       return last;
//     }
//   }

//   class Queue extends Collection {
//     constructor(arg) {
//       super(arg);
//     }

//     enqueue(ele) {
//       this[this._length] = ele;
//       this._length++;
//     }

//     dequeue() {
//       if (this._length === 0) return undefined;

//       const first = this[0];

//       for (let i = 1; i < this._length; i += 1) {
//         this[i - 1] = this[i];
//       }
//       this._length--;
//       delete this[this._length];

//       return first;
//     }
//   }

//   const stack = new Stack(1, 2, 3);
//   console.log(stack._length);
//   // stack.clear();
//   collections.clear(stack);
//   console.log(stack);
//   console.log(stack.isEmpty);

// 이터레이터와 제너레이터 ################################################ 211p ~ 214p

// function* add() {
//   const f = yield '첫 번째 수?';
//   const s = yield '두 번째 수?';
//   return f + s;
// }

// const itAdd = add();

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// class Stack {
//   constructor(arg) {
//     if (Array.isArray(arg)) {
//       arg?.forEach((item, idx) => {
//         this[idx] = item;
//       });
//       this.length = arg.length;
//     } else {
//       this[0] = arg;
//       this.length = 1;
//     }
//   }
//   *[Symbol.iterator]() {
//     for (let i = 0; i < this.length; i += 1) {
//       yield this[i];
//     }
//   }
// }

// const a = new Stack([1, 2, 3, 4, 5]);
// for (const s of a) console.log(s);
// console.log([...a]);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// (**LINE2 객체 필요)
// class Routes {
//   constructor(s, e) {
//     this.start = s;
//     this.end = e;
//   }

//   [Symbol.iterator]() {
//     let s = LINE2.indexOf(this.start);
//     let e = LINE2.indexOf(this.end);
//     let t;
//     return {
//       next: () => {
//         // 조건이 맞지 않는 경우, 예외 처리
//         s = s % LINE2.length;

//         if (LINE2[t] !== LINE2[s]) {
//           t = (e + 1) % LINE2.length;
//           return {
//             value: LINE2[s++],
//             done: false,
//           };
//         } else {
//           return {
//             done: true,
//           };
//         }
//       },
//     };
//   }
// }

// const r1 = new Routes('구로디지털단지', '성수');
// const it1 = r1[Symbol.iterator]();
// console.log([...r1], [...r1].length);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// class Collection {
//   constructor(arg) {
//     if (Array.isArray(arg)) {
//       arg?.forEach((item, index) => {
//         this[index] = item;
//       });
//       this._length = arg.length;
//     } else {
//       this[0] = arg;
//       this._length = 1;
//     }
//   }

//   clear() {
//     for (let i = 0; i < this._length; i += 1) {
//       delete this[i];
//     }
//     this._length = 0;
//   }

//   toArray() {
//     let arr = [];
//     for (let i = 0; i < this._length; i += 1) {
//       arr[i] = this[i];
//     }
//     return arr;
//   }

//   print() {
//     for (let i = 0; i < this._length; i += 1) {
//       console.log(this[i].toString());
//     }
//   }

//   remove() {
//     if (this instanceof Stack) {
//       if (this._length === 0) return undefined;
//       delete this[_length];
//       this._length--;
//     } else if (this instanceof Queue) {
//       if (this._length === 0) return undefined;
//       delete this[0];
//       this._length--;
//       for (let i = 0; i < this._length; i += 1) {
//         this[i] = this[i + 1];
//       }
//       delete this[this._length];
//     }
//   }

//   get isEmpty() {
//     if (this._length === 0) return true;
//     return false;
//   }

//   get peek() {
//     if (this instanceof Stack) {
//       if (this._length === 0) return undefined;
//       return this[this._length - 1];
//     } else if (this instanceof Queue) {
//       if (this._length === 0) return undefined;
//       return this[0];
//     }
//   }

//   get poll() {
//     if (this instanceof Stack) {
//       if (this._length === 0) return undefined;
//       const last = this[this._length - 1];
//       delete this[this._length - 1];
//       this._length--;
//       return last;
//     } else if (this instanceof Queue) {
//       if (this._length === 0) return undefined;
//       const first = this[0];
//       delete this[0];
//       this._length--;

//       return first;
//     }
//   }

//   set length(size) {
//     if (this._length === 0) this._length = undefined;
//     this._length = size;
//   }

//   get length() {
//     if (this._length === 0) return undefined;
//     return this._length;
//   }
// }

// class ArrayList extends Collection {
//   constructor(arr) {
//     super(arr);
//     for (let i = arr.length - 1; i >= 0; i -= 1) {
//       this.data = this.data
//         ? { value: arr[i], rest: this.data }
//         : { value: arr[i] };
//     }
//   }

//   listToArray(list) {
//     const arr = [];
//     let node = this.data;
//     while (true) {
//       arr.push(node.value);
//       node = node?.rest;

//       if (!node) break;
//     }
//     return arr;
//   }

//   arrayToList(arr) {
//     let node;
//     for (let i = arr.length - 1; i >= 0; i -= 1) {
//       node = node ? { value: arr[i], rest: node } : { value: arr[i] };
//     }
//     return node;
//   }

//   toString() {
//     console.log(this.data);
//   }

//   visitAdd(data, val, idx) {
//     if (idx === 0) {
//       if (data) return { value: val, rest: data };
//       else return { value: val };
//     } else {
//       data = { value: data.value, rest: this.visitAdd(data.rest, val, --idx) };
//       return data;
//     }
//   }

//   add(v, i) {
//     this.data = this.visitAdd(this.data, v, i);
//     this._length++;
//   }

//   visitRemove(data, val) {
//     if (data.value === val) {
//       if (data.rest) return data.rest;
//       return;
//     } else {
//       let getRest = this.visitRemove(data.rest, val);
//       if (getRest) data = { value: data.value, rest: getRest };
//       else data = { value: data.value };
//       return data;
//     }
//   }

//   remove(val) {
//     this.data = this.visitRemove(this.data, val);
//     this._length--;
//   }

//   visit(data, idx) {
//     if (idx > this.length) return;
//     if (idx === 0) return data;
//     else return this.visit(data.rest, --idx);
//   }

//   get(idx) {
//     let res = this.visit(this.data, idx);
//     return res.value;
//   }

//   set(i, v) {
//     return this.add(v, i);
//   }

//   *iterator() {
//     let node = this.data;
//     while (node) {
//       yield node;
//       node = node.rest;
//     }
//   }

//   indexOf(val) {
//     let node = this.data;
//     let idx = -1;
//     let found = false;
//     while (!found) {
//       idx++;
//       if (!node) return;
//       if (node.value === val) {
//         found = true;
//         return idx;
//       }
//       node = node.rest;
//     }
//   }

//   contains(val) {
//     let ret = this.indexOf(val);
//     return ret ? true : false;
//   }

//   size() {
//     return this._length;
//   }

//   get peek() {
//     return this.visit(this.data, this._length - 1);
//   }

//   clear() {
//     this.data = {};
//     return 'all clear';
//   }
// }

// const al = new ArrayList([1, 2]);

// 맵과 셋(Map, Set) ################################################ 223p ~ 225p

// const hrTeam = { id: 1, dname: '인사팀' };
// const devTeam = { id: 2, dname: '개발팀' };
// const depts = [hrTeam, devTeam];

// const hong = { id: 1, name: 'Hong', dept: 1 };
// const kim = { id: 2, name: 'Kim', dept: 2 };
// const emps = [
//   hong,
//   kim,
//   { id: 3, name: 'Park', dept: 2 },
//   { id: 4, name: 'Choi', dept: 2 },
// ];

// const deptMap = new Map(
//   depts.reduce((acc, cur) => [...acc, [cur.id, cur]], [])
// );
// const empMap = new Map(emps.reduce((acc, cur) => [...acc, [cur.id, cur]], []));

// let res = [];
// for (const [k, v] of empMap) {
//   if (v.dept === 1) res.push([v, hrTeam]);
//   else res.push([v, devTeam]);
// }

// const empDept = new Map(res);

// console.log(empDept);
// console.log(empDept.get(kim).dname);

// uniqBy() --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const hong2 = { id: 1, name: 'Hong2', dept: 'HR' };
// const kim2 = { id: 2, name: 'Kim2', dept: 'Server' };
// const lee = { id: 3, name: 'Lee', dept: 'Front' };
// const park = { id: 4, name: 'Park', dept: 'HR' };
// const ko = { id: 7, name: 'Ko', dept: 'Server' };
// const loon = { id: 6, name: 'Loon', dept: 'Sales' };
// const choi = { id: 5, name: 'Choi', dept: 'Front' };
// const users3 = [hong2, kim2, lee, park, ko, loon, choi];

// Array.prototype.uniqBy = function (prop) {
//   let red = this.reduce((acc, cur) => [...acc, cur[prop]], []);
//   let res = new Set(red);
//   return [...res];
// };

// console.log(users3.uniqBy('dept'));

// 교, 차, 합 --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---
// const A = [1, 2, 3, 4, 5, 3];
// const B = [1, 22, 3, 44, 5];
// const C = [11, 222, 3, 4, 555];

// const union = (a, b) => {
//   let inter = new Set([...a, ...b]);
//   return [...inter];
// };

// const intersect = (a, b) => {
//   let aSet = new Set(a);
//   let bSet = new Set(b);
//   return union(a, b).filter((e) => aSet.has(e) && bSet.has(e));
// };

// const diff = (a, b) => {
//   let uni = new Set(b);
//   return a.filter((e) => !uni.has(e));
// };

// Number, Math, Date ################################################ 245p ~ 247p

// const random = (year, month, cnt) => {
//   let res = [];
//   const lastDay = new Date(year, month + 1, 0).getDate();

//   for (let i = 0; i < cnt; i += 1) {
//     res.push(Math.floor(Math.random() * lastDay + 1));
//   }
//   return res.sort((a, b) => (a > b ? -1 : 1));
// };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const getDay = (thisYear) => {
//   const WEEK = '일월화수목금토';
//   const nextDate = new Date().getDate();

//   const nextMon = new Date().getMonth();
//   const resDate = new Date(thisYear + 1, nextMon, nextDate).getDay();

//   return WEEK[resDate];
// };

// const today = new Date();

// const after = new Date(today);
// after.setDate(today.getDate() + 100);

// const year = after.getFullYear();
// const month = after.getMonth() + 1;
// const day2 = after.getDate();

// console.log(month, day2);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const printCal = (yy, mm, dd) => {
//   let calendar = [];
//   let WEEK = ['일', '월', '화', '수', '목', '금', '토'];
//   // let WEEK = '일월화수목금토';
//   // calendar.push(WEEK);
//   // 해당 월의 1일의 요일 구하기
//   const firstDay = new Date(yy, mm - 1).getDay();

//   // 해당 월의 마지막 날짜 구하기
//   const lastDay = new Date(yy, mm, 0).getDate();

//   // 달력 출력
//   for (let i = 0; i < firstDay; i += 1) {
//     WEEK.push(' ');
//   }
//   for (let j = 1; j <= lastDay; j += 1) {
//     WEEK.push(j);
//   }

//   let sliceLeft = 0;
//   let sliceRight = 7;
//   for (let i = 0; i < 6; i += 1) {
//     calendar.push(WEEK.slice(sliceLeft, sliceRight));
//     sliceLeft += 7;
//     sliceRight += 7;
//   }

//   return calendar;
// };

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// debounce

// function debounce(cb, delay) {
//   let timer;
//   return (...args) => {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(cb, delay, ...args);
//   };
// }
// // throttle
// function throttle(cb, delay) {
//   let timer;
//   return (...args) => {
//     if (timer) return;
//     timer = setTimeout(() => {
//       cb(...args);
//       timer = null;
//     }, delay);
//   };
// }

// function closure() {
//   let widx = -1;
//   return () => {
//     widx += 1;
//     if (widx >= weeks.length) widx = 0;
//     return `${weeks[widx]}`;
//   };
// }

// const c1 = closure();
// const c2 = closure();

// kbtn.addEventListener(
//   'click',
//   debounce(() => (kl.textContent = c1()), 1000)
// );
// mbtn.addEventListener(
//   'click',
//   throttle(() => (ml.textContent = c2()), 1000)
// );

// 문자열과 정규 표현식 ################################################ 260p ~ 263p

// padStart 내용 추가

// const total = { price: 45000, vat: 4500 };

// let vals = 'vlas';
// let als = 'als';

// function fmt(arr, ...val) {
//   let ret = '';

//   for (let i = 0; i < arr.length; i += 1) {
//     ret += arr[i] + (val[i] ? val[i] : '');
//   }
//   return ret;
// }

// console.log(fmt`주문합계: ${total.price}원`);
// console.log(fmt`세액합계: ${total.vat}원`);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const 가 = '가'.charCodeAt(0);
// const 기 = '기'.charCodeAt(0);
// const 다 = '다'.charCodeAt(0);

// // for (let i = 가; i <= 기; i += 1) {
// //   console.log(String.fromCharCode(i), i, (i - 가) % 28);
// // }

// const KOR_ENG = 'lmnrLMNR';

// const isEndJaum = (word) => {
//   let res = false;
//   const len = word.length - 1;
//   let last = word.charCodeAt(len);
//   let lastToken = word[len];
//   // ㄱ, ㅎ 조건식 추가 (순수 자음 추가)

//   if (44032 <= last && last <= 55203 && (last - 44032) % 28 !== 0) res = true;
//   if (48 <= last && last <= 58) res = true;
//   if (65 <= last && last <= 122 && KOR_ENG.includes(lastToken)) res = true;
//   return res;
// };

// // console.log(isEndJaum('강원도'));
// // console.log(isEndJaum('점수 A'));
// // console.log(isEndJaum('254'));

// assert.equal(isEndJaum('아지오'), false);
// assert.equal(isEndJaum('북한강'), true);
// assert.equal(isEndJaum('뷁'), true);
// assert.equal(isEndJaum('강원도'), false);
// assert.equal(isEndJaum('바라당'), true);
// assert.equal(isEndJaum('ㅜㅜ'), false);
// assert.equal(isEndJaum('케잌'), true);
// assert.equal(isEndJaum('점수 A'), false);
// assert.equal(isEndJaum('알파벳L'), true);
// assert.equal(isEndJaum('24'), false);
// assert.equal(isEndJaum('23'), true);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const CONSONANT = ['이', '을', '은', '이어야', '이랑'];
// const VOWEL = ['가', '를', '는', '여야', '랑'];

// const iga = (word) => (isEndJaum(word) ? '이' : '가');
// const eunun = (word) => (isEndJaum(word) ? '은' : '는');
// const eulul = (word) => (isEndJaum(word) ? '을' : '를');
// const iyuya = (word) => (isEndJaum(word) ? '이어야' : '여야');
// const irang2 = (word) => (isEndJaum(word) ? '이랑' : '랑');

// console.log(`고성군${iga('고성군')}`);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];

// const initSound = {
//   ㄱ: '[가-깋]',
//   // ㄲ 검색
//   ㄴ: '[나-닣]',
//   ㄷ: '[다-딯]',
//   ㄹ: '[라-맇]',
//   ㅁ: '[마-밓]',
//   ㅂ: '[바-빟]',
//   ㅅ: '[사-싷]',
//   ㅇ: '[아-잏]',
//   ㅈ: '[자-짛]',
//   ㅊ: '[차-칳]',
//   ㅋ: '[카-킿]',
//   ㅌ: '[타-팋]',
//   ㅍ: '[파-핗]',
//   ㅎ: '[하-힣]',
// };

// const searchByKoreanInitialSound = (arr, word) => {
//   let t = '';
//   for (let i = 0; i < word.length; i += 1) {
//     t += initSound[word[i]] ? initSound[word[i]] : word[i];
//   }
//   const reg = new RegExp(t, 'g');
//   return arr.filter((item) => item.match(reg));
// };

// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅇ'), [
//   '강원도 고성군',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅅㄱ'), [
//   '강원도 고성군',
//   '고성군 토성면',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅌㅅㅁ'), [
//   '고성군 토성면',
//   '토성면 북면',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅂㅁ'), [
//   '토성면 북면',
//   '북면',
// ]);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅍㅁ'), []);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);

// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

// const upperToLower = (str) => {
//   // 대문자에서 소문자 고르기
//   const reg = /[A-Z]/g;
//   return str.replace(reg, (t) => `*${t.toLowerCase()}*-`);
//   // 변환하기
// };

// console.log(upperToLower('Senior Coding Learning JS'));

// const telfmt = (num) => {
//   const len = num.length;
//   let res = '';
//   // 국번 없는 경우도 추가
//   //

//   if (len === 8) {
//     res = num.replace(/(\d{4})(\d{4})/g, '$1-$2');
//   } else if (len === 9) {
//     res = num.replace(/(\d{2})(\d{3})(\d{4})/g, '$1-$2-$3');
//   } else if (len === 10) {
//     if (Number(num[1]) === 2)
//       res = num.replace(/(\d{2})(\d{4})(\d{4})/g, '$1-$2-$3');
//     else {
//       res = num.replace(/(\d{3})(\d{3})(\d{4})/g, '$1-$2-$3');
//     }
//   } else if (len === 11) {
//     res = num.replace(/(\d{3})(\d{4})(\d{4})/g, '$1-$2-$3');
//   } else if (len === 12) {
//     res = num.replace(/(\d{4})(\d{4})(\d{4})/g, '$1-$2-$3');
//   }
//   return res;
// };

// assert.deepStrictEqual(telfmt('0101234567'), '010-123-4567');
// assert.deepStrictEqual(telfmt('01012345678'), '010-1234-5678');
// assert.deepStrictEqual(telfmt('0212345678'), '02-1234-5678');
// assert.deepStrictEqual(telfmt('021234567'), '02-123-4567');
// assert.deepStrictEqual(telfmt('0331234567'), '033-123-4567');
// assert.deepStrictEqual(telfmt('15771577'), '1577-1577');
// assert.deepStrictEqual(telfmt('07012341234'), '070-1234-1234');
// assert.deepStrictEqual(telfmt('050712345678'), '0507-1234-5678');
