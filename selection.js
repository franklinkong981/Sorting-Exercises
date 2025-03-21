function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimumIndex]) {
        minimumIndex = j;
      }
    }

    if (minimumIndex != i) {
      let temp = arr[i];
      arr[i] = arr[minimumIndex];
      arr[minimumIndex] = temp;
    }
  }

  return arr;
}

module.exports = selectionSort;