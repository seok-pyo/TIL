class Emp {
  firstName;
  lastName;
}

const handler = {
  get(target, prop, receiver) {
    if (prop === 'fullName') {
      return `${target.firstName} ${target.lastName}`;
      // return receiver;
    }
  },
  set(target, prop, value, receiver) {
    if (prop === 'fullName') {
      const [f, l] = value.split(' ');

      target.firstName = target.firstName ? '' : f;
      target.lastName = target.lastName ? '' : l.toUpperCase();
      target.fullName = f && l ? f + ' ' + l : f;
    } else {
      target[prop] = value;
    }
    return receiver;
  },
};

const hong = new Emp();
new Proxy(hong, handler);

hong.fullName = 'kildong Hong';
console.log(hong.fullName);
// proxy.fullName = 'Lee';
// console.log(hong.firstName, hong.lastName);
