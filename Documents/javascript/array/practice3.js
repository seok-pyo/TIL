const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };

const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park];

Object.defineProperty(users, 'addUser', { value: addUser });
Object.defineProperty(users, 'removeUser', { value: removeUser });
Object.defineProperty(users, 'changeUser', { value: changeUser });

function addUser(obj) {
  return [...this, obj];
}

function removeUser(obj) {
  return this.filter((ele) => ele !== obj);
}

function changeUser(a1, a2) {
  let idx = this.indexOf(a1);
  let res = [...this];
  res.splice(idx, 1, a2);
  return res;
}

console.log(Object.prototype.hasOwnProperty('addUser'));
console.log(users.__proto__.hasOwnProperty('addUser'));

console.log(users.addUser(hong));
console.log(users.removeUser(lee));
console.log(users.changeUser(kim, choi));

console.log(users);
