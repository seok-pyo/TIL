// // setTimeout(function () {
// //   console.log('depth1', new Date());
// //   setTimeout(function () {
// //     console.log('depth2', new Date());
// //     setTimeout(function () {
// //       console.log('depth3', new Date());
// //       throw new Error('Already 3-depth');
// //     }, 3000);
// //   }, 2000);
// // }, 1000);

// // console.log('START', new Date());

// // promise를 이용하여 refactoring 하시오

// // const myPromise = new Promise((resolve) => {
// //   setTimeout(() => {
// //     console.log(`depth1`, new Date());
// //     resolve();
// //   }, 1000);
// // });

// // myPromise
// //   .then(() => {
// //     return new Promise((resolve) => {
// //       setTimeout(() => {
// //         console.log(`depth2`, new Date());
// //         resolve();
// //       }, 2000);
// //     });
// //   })
// //   .then(() => {
// //     setTimeout(() => {
// //       console.log(`depth3`, new Date());
// //     }, 3000);
// //   });

// // console.log('START', new Date());

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // let i = 1;
// // const timer = (res) => {
// //   setTimeout(() => {
// //     console.log(`depth${i}`, new Date());
// //     return res(i++);
// //   }, 1000 * i);
// // };

// // const myPromise = new Promise((resolve) => timer(resolve));

// // myPromise
// //   .then(() => {
// //     return new Promise((resolve) => timer(resolve));
// //   })
// //   .then(() => {
// //     return new Promise((resolve) => timer(resolve));
// //   });

// // console.log('START', new Date());

// // - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // function memo() {
// //   let i = 1;
// //   return function closure(res) {
// //     return setTimeout(() => {
// //       console.log(`depth${i}`, new Date());
// //       if (i < 3) res(i++);
// //       else reject(new Error('Already 3-depth'));
// //     }, 1000 * i);
// //   };
// // }

// // const timer = memo();

// // const myPromise = new Promise((resolve) => timer(resolve));

// // myPromise
// //   .then(() => {
// //     return new Promise((resolve) => timer(resolve));
// //   })
// //   .then(() => {
// //     return new Promise((resolve) => timer(resolve));
// //   });

// // console.log('START', new Date());

// // const depthTimer = (cnt) =>
// //   new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log(`depth${cnt}`, new Date());
// //       if (cnt < 3) resolve(cnt + 1);
// //       else reject(new Error('Alreade 3-depth'));
// //     }, 1000 * cnt);
// //   });

// // depthTimer(1)
// //   .then(depthTimer)
// //   .then(depthTimer)
// //   .catch((err) => console.log(err));

// // new Promise((resolve) => {
// //   console.log(1);
// //   resolve(2);
// // }).then((result) => console.log(result));

// // console.log(3);

// // console.log('- - - - - - - -');

// // console.log(
// //   new Promise((resolve) => {
// //     setTimeout(() => {
// //       console.log(1);
// //       resolve(2);
// //     }, 1000);
// //   })
// //     .then((result) => {
// //       console.log('this is', result);
// //       return 10;
// //     })
// //     .then()
// //     .then()
// //     .then((result) => console.log('last result', result))
// // );

// // 문제 2번
// // const promiseFn = (id = 1) =>
// //   new Promise((resolve, reject) => {
// //     console.log('id>>', id);
// //     if (id < 7) resolve(id + 1);
// //     else reject(new Error('어디로?' + id));
// //   });

// // promiseFn(10)
// //   .then((res) => {
// //     console.log('res1>>', res);
// //     promiseFn(res);
// //   })
// //   .then((res) => {
// //     console.log('res2>>', res);
// //     // return promiseFn(res ?? 3);
// //   })
// //   .catch((err) => console.log('this error>>', err));

// // 문제 3번 PromiseAll

// const assert = require('assert');

// const vals = [1, 2, 3];
// const randTime = (val) =>
//   new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

// function promiseAll(arr) {
//   return new Promise((resolve, reject) => {
//     const results = [];

//     (async function () {
//       for (let i = 0; i < arr.length; i += 1) {
//         await arr[i].then((res) => results.push(res));
//       }
//       if (reject) reject('throw error');
//       if (resolve) resolve(err);
//     })();
//   });
// }

// const promiseAll2 = (arr) =>
//   new Promise((resolve, reject) => {
//     const results = [];

//     const af = async () => {
//       for (let i = 0; i < arr.length; i += 1) {
//         // if (arr[i] !== Promise.reject())
//         await arr[i].then((res) => results.push(res));
//         // else throw new Error('ee');
//       }
//       // resolve(results);
//       resolve(results);
//     };

//     af();
//   });

// promiseAll2([randTime(1), randTime(2), randTime(3)])
//   .then((arr) => {
//     console.table(arr);
//     assert.deepStrictEqual(arr, vals);
//   })
//   .catch(console.error);

// // promiseAll2([randTime(11), Promise.reject('RRR'), randTime(33)])
// //   .then((array) => {
// //     console.log('여긴 과연 호출될까?!');
// //   })
// //   .catch((error) => {
// //     console.log('reject!!!!!!>>', error);
// //   });

// // const arr = [randTime(11), Promise.reject('RRR'), randTime(33)];

// // Promise.all(arr).then((val) => console.log(val));

// // - - - - - - - - - - generator
// // function* iter(prom) {
// //   let values = [];
// //   for (let i = 0; i < prom.length; i += 1) {
// //     yield prom[i].then((res) => values.push(res));
// //   }
// //   return values;
// // }

// // function pa(arr) {
// //   const caller = iter(t);

// //   return new Promise((resolve, reject) => {});
// // }

const afterTime = (sec) => {
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000 * sec, sec);
  });
};

// const odds = async (arr) => {
//   arr.filter((e) => {
//     const r = await afterTime(e);
//     console.log(r);
//     return r % 2 === 1;
//   });
// };

const odds = [1, 2, 3].filter((val) => {
  console.log(afterTime(val));
  // console.log(ret1);

  // if (r) return true;
  // else return false;
});

// const odds2 = [1, 2, 3].filter((val) => {});

console.log('odds=', odds);

// const rrr = (val) => {
//   async function iter() {
//     val.filter((e) => {
//       const r = await afterTime(e);
//       console.log(r);
//       return r % 2 === 1;
//     })
//   }
// };
