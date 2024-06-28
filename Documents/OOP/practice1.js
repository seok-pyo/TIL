class Emp {
  firstName;
  lastName;
}

const handler = {
  get(target, prop, receiver) {
    if (prop === 'fullName') {
      return `${target.firstName} ${target.lastName.toUpperCase()}`;
    }
  },
  set(target, prop, value, receiver) {
    // console.log(target, prop, value, receiver);
    if (prop === 'fullName') {
      const [f, l] = value.split(' ');
      target.firstName = f;
      target.lastName = l;
      target.fullName = value;
      console.log(f, l);
    } else {
      target[prop] = value;
    }
    return target;
  },
};

const hong = new Emp();
const proxy = new Proxy(hong, handler);
proxy.fullName = 'kildong Hong';
console.log(proxy.fullName);

proxy.fullName = 'Lee';

//console.log(hong);
// console.log(hong);
// .fullName = 'Lee';
console.log(hong.firstName, hong.lastName);
