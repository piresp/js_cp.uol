
const numbers = [1, 2, 3, 4, 5, 1, 1];

function getMax(array) {
  /* my
  let elementMax = 0;
  for (let element of array)
    element > elementMax ? elementMax = element : null;
  return elementMax;
  */
  if (array.lenght === 0) return undefined;
  return array.reduce((a, b) => (a > b) ? a : b );
}

const output = getMax(numbers);
console.log(output);
