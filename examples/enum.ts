enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Austin',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
};

if (person.role === Role.ADMIN) {
  console.log('I am an admin');
}

// compiles to JS as...
// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
//     Role[Role["AUTHOR"] = 2] = "AUTHOR";
// })(Role || (Role = {}));
// var person = {
//     name: 'Austin',
//     age: 28,
//     hobbies: ['Sports', 'Cooking'],
//     role: Role.AUTHOR
// };
// if (person.role === Role.ADMIN) {
//     console.log('I am an admin');
// }
