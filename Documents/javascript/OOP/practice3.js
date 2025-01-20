class Stack extends Array {
  constructor(arg) {
    arg ? super(...arg) : super();
  }

  push(arg) {
    this[this.length] = arg;
  }

  pop() {
    if (this.length === 0) return undefined;

    const last = this[this.length - 1];
    this.length--;
    return last;
  }
}

class Queue extends Array {
  constructor(arg) {
    arg ? super(arg) : super();
  }

  enqueue(arg) {
    this[this.length] = arg;
  }

  dequeue() {
    if (this.length === 0) return undefined;

    const first = this[0];
    this.splice(0, 1);

    return first;
  }
}

const stack = new Stack([1, 2]);

const s1 = new Stack();
s1.push(34);
s1.push(21);
console.log(s1.pop());
console.log(s1);

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(30);
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
