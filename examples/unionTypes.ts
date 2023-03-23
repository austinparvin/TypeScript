// consider combine() should add numbers and concatenate strings
// UNION TYPE: number|string
const combine = (input1: number | string, input2: number | string) => {
  let result;

  // You might need a runtime check to calm TS ERRORS when implementing UNION types
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

const combinedAges = combine(30, 28);
const combineNames = combine('Max', 'Anna');
