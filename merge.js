function merge(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let merrged_arr = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      merrged_arr.push(arr1[p1]);
      p1++;
    } else {
      merrged_arr.push(arr2[p2]);
      p2++;
    }
  }

  while (p1 < arr1.length) {
    merrged_arr.push(arr1[p1]);
    p1++;
  }

  while (p2 < arr2.length) {
    merrged_arr.push(arr2[p2]);
    p2++;
  }

  return merrged_arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midIndex = Math.floor(arr.length / 2);
  let sortedLeftHalf = mergeSort(arr.slice(0, midIndex));
  let sortedRightHalf = mergeSort(arr.slice(midIndex));
  return merge(sortedLeftHalf, sortedRightHalf); 
}

module.exports = { merge, mergeSort};