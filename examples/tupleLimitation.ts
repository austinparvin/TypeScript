// // We know that role should be only two items, a number and string in that order
// const person = {
//   name: 'Austin',
//   age: 28,
//   hobbies: ['Sports', 'Cooking'],
//   role: [1, 'author'],
// };

// // JS would allow us to add extra elements or reassign with the wrong type
// person.role.push('admin');
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

// person.role = [1,'', '']: // TS will catch this ERROR since this 2 item tuple is reassigned with 3
person.role.push('admin'); // Unfortunately this is a limitation of TS and it does not catch that this is a 2 item Tuple, .push() will NOT throw and ERROR
