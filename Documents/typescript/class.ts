// 클래스 속성을 읽거나 쓰려면 명시적으로 선언해야 함.
// class FieldTrip {
//   destination;

//   constructor(destination: string) {
//     this.destination = destination;
//     console.log(`My ${destination}`);
//   }
// }

class WithMethod {
  myMethod() {}
}

console.log(new WithMethod().myMethod === new WithMethod().myMethod); // true

class WithProperty {
  myProperty!: () => void; // Type 정의
}
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true

const instance = new WithProperty();
// instance.myProperty(); // not ok! 함수 구현이 되지 않았기 때문에?

// class WithProperty1 {
//   myProperty!: () => void;
// }

// console.log(new WithProperty1().myProperty === new WithProperty1().myProperty);

class WithProperty2 {
  myProperty: () => void;
  constructor() {
    this.myProperty = () => {
      console.log('Hello, my world!');
    };
  }
}

// console.log(new WithProperty2().myProperty === new WithProperty2().myProperty);
const I1 = new WithProperty2();
const I2 = new WithProperty2();

console.log(I1.myProperty === I2.myProperty); // false
