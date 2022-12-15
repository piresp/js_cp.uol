
function includes(array, searchElement) {
  for (let element of array)
    if (element === searchElement) 
      return true;
  return false;
}

const array = [1, 2, 3, 4];

console.log(includes(array, 2));
