// function sum(a , b){
//     return a + b;
// }
// console.log(sum(5,5));

// function curriedSum(a){
//     return function(b){
//         return a + b
//     }
// }

// console.log(curriedSum(5)(6));

// var addTen = curriedSum(10);
// console.log(addTen(67));

function getCurryFunction(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

function sum (a, b, c){
    return a + b + c;
}

var curriedSum = getCurryFunction(sum);
console.log(curriedSum(1)(2)(3));

