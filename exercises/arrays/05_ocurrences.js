
const numbers = [1, 2, 3, 4, 5, 1, 1]

function countOc(array, searchElement) {
  /*
  let i = 0;
  for (let element of array)
    element === searchElement ? i++ : null;
  return i;
  */
  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(`accumulator: ${accumulator}, currentValue: ${current}, searchElement: ${searchElement}`);
    return accumulator + occurrence
  }, 0);
}

const output = countOc(numbers, 1);
console.log(output);