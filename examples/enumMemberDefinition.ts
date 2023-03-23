// You can explicitly define enum member values

enum Role {
  ADMIN = 'admin',
  READ_ONLY = 5,
  AUTHOR = 'AUTHOR',
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
//     Role["ADMIN"] = "admin";
//     Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
//     Role["AUTHOR"] = "AUTHOR";
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
