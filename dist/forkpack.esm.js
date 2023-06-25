// src/modules/multiply.js
function multiply(a, b) {
  if (arguments[1][0]) {
    return arguments[1].reduce(function(total, current) {
      return total * current;
    }, 1);
  }
  ;
  return a * b;
}

// src/modules/curry.js
function curry(fn, seed) {
  const reduceValue = (args, seedValue) => args.reduce((acc, a) => {
    return fn.call(fn, acc, a);
  }, seedValue);
  const next = (...args) => {
    return (...x) => {
      if (!x.length) {
        return reduceValue(args, seed);
      }
      return next(...args, reduceValue(x, seed));
    };
  };
  return next();
}

// src/modules/sum.js
function sum(a, b) {
  if (arguments[1][0]) {
    return arguments[1].reduce(function(total, current) {
      return total + current;
    }, 0);
  }
  ;
  return a + b;
}

// src/main.js
var fp = {
  sum: curry(sum, 0),
  multiply: curry(multiply, 1),
  curry
};
if (typeof window !== "undefined") {
  window.fp = fp;
}
export {
  curry,
  fp,
  multiply,
  sum
};
