// Create a memoize function that remembers previous inputs and stores them
// in cache so that itwon’t have to compute the same inputs more
// than once. The function will take an unspecified number of integer inputs and a reducer method.

function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) return cache.get(key);
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

function time(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const factM = memoize(factorial);

time(() => factM(8));
time(() => factM(8));
time(() => factM(8));
time(() => factM(8));
time(() => factM(8));
time(() => factM(8));
