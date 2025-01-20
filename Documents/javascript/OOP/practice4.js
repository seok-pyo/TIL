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

  clear(data) {
    for (let i = 0; i < data._length; i += 1) {
      delete data[i];
    }
    data._length = 0;
  }

  toArray(data) {
    let arr = [];
    for (let i = 0; i < data._length; i += 1) {
      arr[i] = data[i];
    }
    return arr;
  }

  print(data) {
    for (let i = 0; i < data._length; i += 1) {
      console.log(data[i].toString());
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

class Stack extends Collection {
  constructor(arg) {
    super(arg);
  }

  push(data) {
    this[this._length] = data;
    this._length++;
  }

  pop() {
    if (this._length === 0) return undefined;

    const last = this[this._length - 1];
    this._length--;
    delete this[this._length - 1];
    return last;
  }
}

class Queue extends Collection {
  constructor(arg) {
    super(arg);
  }

  enqueue(ele) {
    this[this._length] = ele;
    this._length++;
  }

  dequeue() {
    if (this._length === 0) return undefined;

    const first = this[0];

    for (let i = 1; i < this._length; i += 1) {
      this[i - 1] = this[i];
    }
    this._length--;
    delete this[this._length];

    return first;
  }
}

const stack = new Stack(1, 2, 3);
console.log(stack._length);
// stack.clear();
collections.clear(stack);
console.log(stack);
console.log(stack.isEmpty);
