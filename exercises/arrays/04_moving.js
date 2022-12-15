
const numbers = [1, 2, 3, 4];

function moveTo(array, index, indexTo) {
  if (index > array.lenght | indexTo > array.lenght) {
    console.error('invalid position');
    return
  } else {
      const newArray = [...array];
      /*  my
       const element = array[index];
       newArray.splice(index, 1);
      */
      const element = newArray.splice(index, 1)[0];
      newArray.splice(indexTo, 0, element);
      return newArray;
  }
}

const output = moveTo(numbers, 0, 3);
console.log(output)