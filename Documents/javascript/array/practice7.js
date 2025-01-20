// range(start, end, step)

const range = (start, end, step) => {
  const cnt = arguments.length;

  if (cnt === 3) {
    if (step === 0) return [start];
    return Array.from(
      { length: (end - start) / step + 1 },
      (_, i) => start + i * step
    );
  } else if (cnt === 2) {
    if (start < end) {
      step = 1;
      return Array.from(
        { length: end - start + 1 },
        (_, i) => start + i * step
      );
    } else {
      step = -1;
      return Array.from(
        { length: start - end + 1 },
        (_, i) => start + i * step
      );
    }
  } else {
    if (start === 0) return [0];
    if (start > 0) {
      return Array.from({ length: start }, (_, i) => i + 1);
    } else {
      return Array.from({ length: Math.abs(start) }, (_, i) => start + i);
    }
  }
};

console.log(range(0, 0));
console.log(range(0, 0, 5));
console.log(range(0, 0, 0));
console.log(range(0, -1, -5));
