function* add() {
  const x = yield '첫 번째 수?';
  const y = yield '두 번째 수?';
  return x + y;
}

const itAdd = add();
console.log(itAdd.next().value);
console.log(itAdd.next(1).value);
console.log(itAdd.next(2).value);
