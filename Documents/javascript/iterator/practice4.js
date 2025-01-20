// Collection 클래스를 상속받아 List 메소드들과 클래스 메소드 arrayToList, listToArray를
// 보유한 ArrayList 클래스를 구현하세요.

const assert = require('assert');

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

  arrayToList(arr) {
    let node;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      node = node ? { value: arr[i], rest: node } : { value: arr[i] };
    }
    return node;
  }

  toString() {
    console.log(this.data);
  }

  visitAdd(data, val, idx) {
    if (idx === 0) {
      if (data) return { value: val, rest: data };
      else return { value: val };
    } else {
      data = { value: data.value, rest: this.visitAdd(data.rest, val, --idx) };
      return data;
    }
  }

  add(v, i) {
    this.data = this.visitAdd(this.data, v, i);
    this._length++;
  }

  visitRemove(data, val) {
    if (data.value === val) {
      if (data.rest) return data.rest;
      return;
    } else {
      let getRest = this.visitRemove(data.rest, val);
      if (getRest) data = { value: data.value, rest: getRest };
      else data = { value: data.value };
      return data;
    }
  }

  remove(val) {
    this.data = this.visitRemove(this.data, val);
    this._length--;
  }

  visit(data, idx) {
    if (idx > this.length) return;
    if (idx === 0) return data;
    else return this.visit(data.rest, --idx);
  }

  get(idx) {
    let res = this.visit(this.data, idx);
    return res.value;
  }

  set(i, v) {
    return this.add(v, i);
  }

  *iterator() {
    let node = this.data;
    while (node) {
      yield node;
      node = node.rest;
    }
  }

  indexOf(val) {
    let node = this.data;
    let idx = -1;
    let found = false;
    while (!found) {
      idx++;
      if (!node) return;
      if (node.value === val) {
        found = true;
        return idx;
      }
      node = node.rest;
    }
  }

  contains(val) {
    let ret = this.indexOf(val);
    return ret ? true : false;
  }

  size() {
    return this._length;
  }

  get peek() {
    return this.visit(this.data, this._length - 1);
  }

  clear() {
    this.data = {};
    return 'all clear';
  }
}

const al = new ArrayList([1, 2]);

al.toString();
al.add(5, 2);
al.toString();
al.remove(5);
al.toString();
console.log(al.get(1));
al.set(1, 300);
al.set(1, 300);
al.toString();

console.log(al.iterator().next());
console.log(al.indexOf(300));
console.log(al.contains(300));
console.log(al.size());
console.log(al);
al.set(1, 305);
console.log(al);
console.log(al.size());
console.log(al.isEmpty);
console.log(al.peek);

console.log(al.arrayToList([12, 34, 34]));

console.log(al.clear());
console.log(al.data);
// al.toString();

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
