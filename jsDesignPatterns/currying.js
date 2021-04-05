function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
// usage
function sum(a, b) {
  return a + b;
}
let curriedSum = curry(sum);
f1 = curriedSum(2)
f2 = curriedSum(3)
console.log(f2(4))
// alert( curriedSum(1)(2) ); // 3


function sum(a, b) {
  return a + b;
}

let curriedSum = _.curry(sum); // using _.curry from lodash library

console.log( curriedSum(1, 2) ); // 3, still callable normally
console.log( curriedSum(1)(2) ); // 3, called partially
