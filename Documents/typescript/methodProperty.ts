// class Wp {
//   myP: () => void;
//   myP2: () => void;

//   mM() {
//     console.log(this);
//   }

//   constructor() {
//     this.myP = () => {
//       console.log(this);
//     };
//     this.myP2 = function () {
//       console.log(this);
//     };
//   }
// }

// const ins = new Wp();
// ins.myP();
// ins.mM();
// ins.myP2();

const dog = {
  name: 'Maxx',
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },

  whatsYourName() {
    setTimeout(() => {
      // 1
      this.showMyName();
    }, 1000);
    setTimeout(this.showMyName, 1000); // 2
  },
};

dog.whatsYourName();
