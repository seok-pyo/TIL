const assert = require('assert');

// - - - - - - - 문제 1번

// const depthTimer = (cnt) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`depth${cnt}`, new Date());
//       if (cnt < 3) resolve(cnt + 1);
//       else reject(new Error('Alreade 3-depth'));
//     }, 1000 * cnt);
//   });

// depthTimer(1)
//   .then(depthTimer)
//   .then(depthTimer)
//   .catch((err) => console.log(err));

// console.log('START', new Date());

// - - - - - - - 문제 2번

// const promiseFn = (id = 1) =>
//   new Promise((resolve, reject) => {
//     console.log('id>>', id);
//     if (id < 7) resolve(id + 1);
//     else reject(new Error('where', id));
//   });

// promiseFn(1)
//   .then((res) => {
//     console.log('res1>>', res);
//     promiseFn(res);
//   })
//   .then((res) => {
//     if (res.constructor !== Promise) throw new Error(); // 에러 처리
//     console.log('res2>>', res);
//     // return promiseFn(res ?? 3); 프로미스 리턴
//   })
//   .catch((err) => console.log('ERROR', err));

// - - - - - - - 문제 3번

const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

const promiseAll = (arr) =>
  new Promise((resolve, reject) => {
    const results = [];

    (async () => {
      for (let i = 0; i < arr.length; i += 1) {
        await arr[i].then((res) => results.push(res));
      }
      resolve(results);
    })();
  });

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject('RRR'), randTime(33)])
  .then((array) => {
    console.log('여긴 과연 호출될까?!');
  })
  .catch((error) => {
    console.log('reject!!!!!!>>', error);
  });
