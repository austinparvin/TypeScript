// 1) While this error would be caught and thrown at compile, it will not be caught at runtime
// TYPESCRIPT
const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const number1 = '5';
const number2 = 2.8;

// By typing the func param as a "number" our ide and compiler will give us an error
// const result = add(number1, number2);
