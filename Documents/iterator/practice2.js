class Stack {
  constructor(arg) {
    if (Array.isArray(arg)) {
      arg?.forEach((item, idx) => {
        this[idx] = item;
      });
      this.length = arg.length;
    } else {
      this[0] = arg;
      this.length = 1;
    }
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i += 1) {
      yield this[i];
    }
  }
}

const a = new Stack([1, 2, 3, 4, 5]);
for (const s of a) console.log(s);
console.log([...a]);

// const it = a.iterator();
// console.log(it.next());
