const handler = {
  get(target, prop) {
    if (prop === 'fullName') {
      return `${target.firstName} ${target.lastName}`;
    }
  },
  set(target, prop, value) {
    if (prop === 'fullName') {
      const [f, l] = value.split(' ');
      target.firstName = f || '';
      target.lastName = l ? l.toUpperCase() : '';
    } else {
      target[prop] = value;
    }
    return true;
  },
};

class Emp {
  constructor() {
    this.firstName;
    this.lastName;
  }
}

const hong = new Emp();
hong.fullName = 'Kildong Hong'; // split하여 firstName, lastName 셋
console.log(hong.fullName); // 'Kildong HONG' 출력하면 통과!
hong.fullName = 'Lee';
console.log(hong.firstName, hong.lastName);
