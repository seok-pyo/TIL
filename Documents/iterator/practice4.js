// Collection 클래스를 상속받아 List 메소드들과 클래스 메소드 arrayToList, listToArray를
// 보유한 ArrayList 클래스를 구현하세요.

const assert = require('assert');

// Collection 설계 고민

class Collection {
  constructor(arg) {
    if (Array.isArray(arg)) {
      arg?.forEach((item, index) => {
        this[index] = item;
      });
      this._length = arg.length;
    } else {
      this[0] = arg;
      this._length = 1;
    }
  }

  clear() {
    for (let i = 0; i < this._length; i += 1) {
      delete this[i];
    }
    this._length = 0;
  }

  toArray() {
    let arr = [];
    for (let i = 0; i < this._length; i += 1) {
      arr[i] = this[i];
    }
    return arr;
  }

  print() {
    for (let i = 0; i < this._length; i += 1) {
      console.log(this[i].toString());
    }
  }

  remove() {
    if (this instanceof Stack) {
      if (this._length === 0) return undefined;
      delete this[_length];
      this._length--;
    } else if (this instanceof Queue) {
      if (this._length === 0) return undefined;
      delete this[0];
      this._length--;
      for (let i = 0; i < this._length; i += 1) {
        this[i] = this[i + 1];
      }
      delete this[this._length];
    }
  }

  get isEmpty() {
    if (this._length === 0) return true;
    return false;
  }

  get peek() {
    if (this instanceof Stack) {
      if (this._length === 0) return undefined;
      return this[this._length - 1];
    } else if (this instanceof Queue) {
      if (this._length === 0) return undefined;
      return this[0];
    }
  }

  get poll() {
    if (this instanceof Stack) {
      if (this._length === 0) return undefined;
      const last = this[this._length - 1];
      delete this[this._length - 1];
      this._length--;
      return last;
    } else if (this instanceof Queue) {
      if (this._length === 0) return undefined;
      const first = this[0];
      delete this[0];
      this._length--;

      return first;
    }
  }

  set length(size) {
    if (this._length === 0) this._length = undefined;
    this._length = size;
  }

  get length() {
    if (this._length === 0) return undefined;
    return this._length;
  }
}

class ArrayList extends Collection {
  constructor(arr) {
    super(arr);
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      this.data = this.data
        ? { value: arr[i], rest: this.data }
        : { value: arr[i] };
    }
  }

  listToArray(list) {
    const arr = [];
    let node = this.data;
    while (true) {
      arr.push(node.value);
      node = node?.rest;

      if (!node) break;
    }
    return arr;
  }

  arrayToList(arr) {}

  toString() {
    console.log(this.data);
  }

  visit(data, val, idx) {
    if (idx === 0) {
      return { value: val, rest: data };
    } else {
      data = { value: data.value, rest: this.visit(data.rest, val, --idx) };
      return data;
    }
  }

  add(v, i) {
    this.data = this.visit(this.data, v, i);
  }
}

const al = new ArrayList([1, 2]);
console.log(al);

al.toString();
al.add(5, 1);
al.toString();

// assert
// assert.deepStrictEqual(
//   ArrayList.listToArray({
//     value: 1,
//     rest: { value: 2 },
//   }),
//   [1, 2]
// );

// assert.deepStrictEqual(ArrayList.arrayToList([1, 2]), {
//   value: 1,
//   rest: { value: 2 },
// });
