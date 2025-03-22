function getDigit(num, digitIndex) {
  //digitIndex of 0 = gets ones digit, digitIndex of 1 = get tens digit, etc.
  for (let numTimesDivided = 0; numTimesDivided < digitIndex; numTimesDivided++) {
    num = Math.floor(num / 10);
  }
  return num % 10;
}

function digitCount() {

}

function mostDigits() {
  
}

function radixSort() {

}

module.exports = { getDigit, digitCount, mostDigits, radixSort };