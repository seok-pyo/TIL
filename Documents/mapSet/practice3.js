Object.defineProperty(Array.prototype, 'firstObject', {
  get() {
    return this[0];
  },
});

const a = [1, 2, 3];

const HAN = '가나다라마바사아자차카타파하';
const CON = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ';
// const fs = (arr, init) => {
//   const S = HAN[CON.indexOf(init)];
//   const E =
//   const r = init.reduce((a, c) => {}, '');
// };

const S = HAN[CON.indexOf('ㄱ')];
console.log(S);
const idx = CON.indexOf('ㄱ');
const E = HAN[idx + 1].charCodeAt(0) - 1;
console.log(String.fromCharCode(E));
const conso = ['ㄱ', 'ㄷ'];
const r = '';

String.fromCharCode();

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
}

class ArrayList extends Collection {
  static arrayToList() {}
  static listToArray() {}
  add(v, i) {
    return this._arr.splice(i, 0, v);
  }
  print() {
    console.log(this._arr);
  }

  contains(v) {
    return this._arr.includes(v);
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this._len; i += 1) {
      yield this._arr[i];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }
}

const al = new ArrayList([1, 2, 3]);

const it = al.iterator();
console.log(it.next());
console.log(it.next());
