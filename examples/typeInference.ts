const person = {
  name: 'Austin',
  age: 28,
  hobbies: ['Sports', 'Cooking'],
};

for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase()); // TS infers the type string on hobby and gives us Sting method autocomplete
  // console.log(hobby.map()) //  it also knows .map() is not a method of String and give an ERROR
}
