// // We know that role should be only two items, a number and string in that order
// const person = {
//   name: 'Austin',
//   age: 28,
//   hobbies: ['Sports', 'Cooking'],
//   role: [1, 'author'],
// };

// // JS would allow us to  reassign with the wrong type
// person.role[1] = 10;

// TS person typed with role being a Tuple
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Austin',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role: [1, 'author'],
};

// person.role[1] = 10; TS won't allow us to reassign with the wrong type and give an ERROR
