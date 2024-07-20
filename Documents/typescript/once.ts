function once(fn: (x: number, y: number) => string) {
  let flag = false;

  return (x: number, y: number) => {
    if (flag) return;
    else {
      flag = true;
      return fn(x, y);
    }
  };
}

const fn = once((x: number, y: number) => `${x}, ${y}`);

// console.log(fn(1, 6));
// console.log(fn(2, 7));
// console.log(fn(4, 6));

function timer1(fn: (x: number, y: number) => string) {
  let excuted = false;
  return function (x: number, y: number) {
    if (excuted) return undefined;
    excuted = true;
    setTimeout(() => {
      excuted = false;
    }, 1000);
    return fn(x, y);
  };
}

const t = timer1((x: number, y: number) => `${x}, ${y}`);

setInterval(() => {
  console.log(t(2, 4));
}, 100);
