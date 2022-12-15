
const numbers = [1, 2, 3, 4]

function exclude(array, excluded) {
  const newArray = []
  for (let element of array)
    !excluded.includes(element) ? newArray.push(element) : null
  return newArray;
}

const output = exclude(numbers, [1, 2]);
console.log(output);
