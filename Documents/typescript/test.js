global.name = 'ppp';

const obj = {
  name: 'ObjName',

  bark3() {
    console.log(this.name);
  },
  bark4: () => {
    console.log(this.name); // ?
  }, // bark4의 소유자(obj)의 Lexical Scope의 this
};

// console.log(this);
// console.log(global.name);
// obj.bark3();
// obj.bark4();

const af = () => {
  console.log(this.name);
};

const rf = function () {
  console.log(this.name);
};

af.call(obj, 'af');
rf.call(obj, 'rf');
