/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
  //pivot is the value at the first index.
  let pivotValue = arr[0];
  let indexToMovePivotTo = 0;

  for (let i = 1; i < arr.length; i++) {
    //if value less than pivot value and its index != indexToMovePivotTo, swap it with indexToMovePivotTo
    if (arr[i] < pivotValue) {
      indexToMovePivotTo++;
      if (i != indexToMovePivotTo) {
        let temp = arr[indexToMovePivotTo];
        arr[indexToMovePivotTo] = arr[i];
        arr[i] = temp;
      }
    }
  }

  //swap pivotValue with value at indexToMovePivotTo
  arr[0] = arr[indexToMovePivotTo];
  arr[indexToMovePivotTo] = pivotValue;

  return indexToMovePivotTo;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports = {pivot, quickSort};