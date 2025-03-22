/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
  //pivot is the value at the start.
  let pivotValue = arr[start];
  let indexToMovePivotTo = start;

  for (let i = start + 1; i <= end; i++) {
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
  arr[start] = arr[indexToMovePivotTo];
  arr[indexToMovePivotTo] = pivotValue;

  return indexToMovePivotTo;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
}

let arr1 = [20, 12, 10, 7, 9];
pivot(arr1);
console.log(arr1);

module.exports = {pivot, quickSort};