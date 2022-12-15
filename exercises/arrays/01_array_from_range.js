
function arrayFromRange(start, end) {
  let array = [];
  for (let i = start; i <= end; i++)
    array.push(i);
  return array;
}

const numbers = arrayFromRange(-10, -4);
console.log(numbers);
