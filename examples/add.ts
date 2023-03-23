// 1)
// // JAVASCRIPT
// const add = (n1, n2) => {
//     return n1 + n2;
// };

// const number1 = '5';
// const number2 = 2.8;

// const result = add(number1, number2);

// // will result in 52.8 instead of the desired 7.8
// console.log(result);

// 2)
// TYPESCRIPT
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const number1 = '5';
const number2 = 2.8;

// By typing the func param as a "number" our ide and compiler will give us an error
// const result = add(number1, number2);
