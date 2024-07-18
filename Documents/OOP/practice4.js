class collections {
  constructor(arg) {
    arg?.forEach((item, index) => {
      this[index] = item;
    });
    this.length = arg ? arg.length : 0;
  }

  clear() {
    for (let i = 0; i < this.length; i += 1) {
      delete this[i];
    }
    this.length = 0;
  }

  toArray() {
    let arr = [];
    for (let i = 0; i < this.length; i += 1) {
      arr[i] = this[i];
    }
    return arr;
  }

  print() {
    for (let i = 0; i < this.length; i += 1) {
      console.log(this[i].toString());
    }
  }

  remove() {
    if (this instanceof Stack) {
      if (this.length === 0) return undefined;
      delete this[length];
      this.length--;
    } else if (this instanceof Queue) {
      if (this.length === 0) return undefined;
      delete this[0];
      this.length--;
      for (let i = 0; i < this.length; i += 1) {
        this[i] = this[i + 1];
      }
      delete this[this.length];
    }
  }

  get isEmpty() {
    if (this.length === 0) return true;
    return false;
  }

  get peek() {
    if (this instanceof Stack) {
      if (this.length === 0) return undefined;
      return this[this.length - 1];
    } else if (this instanceof Queue) {
      if (this.length === 0) return undefined;
      return this[0];
    }
  }

  get poll() {
    if (this instanceof Stack) {
      if (this.length === 0) return undefined;
      const last = this[this.length - 1];
      delete this[this.length - 1];
      this.length--;
      return last;
    } else if (this instanceof Queue) {
      if (this.length === 0) return undefined;
      const first = this[0];
      delete this[0];
      this.length--;

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

class Stack extends collections {
  constructor(arg) {
    super(arg);
  }

  push(data) {
    this[this.length] = data;
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;

    const last = this[this.length - 1];
    this.length--;
    delete this[this.length - 1];
    return last;
  }
}

class Queue extends collections {
  constructor(arg) {
    super(arg);
  }

  enqueue(ele) {
    this[this.length] = ele;
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return undefined;

    const first = this[0];

    for (let i = 1; i < this.length; i += 1) {
      this[i - 1] = this[i];
    }
    this.length--;
    delete this[this.length];

    return first;
  }
}

const stack = new Stack([1, 2]);
console.log(stack.length);
