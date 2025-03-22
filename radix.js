function getDigit(num, digitIndex) {
  //digitIndex of 0 = gets ones digit, digitIndex of 1 = get tens digit, etc.
  for (let numTimesDivided = 0; numTimesDivided < digitIndex; numTimesDivided++) {
    num = Math.floor(num / 10);
  }
  return num % 10;
}

function digitCount(num) {
  let numDigits = 0;
  while (num != 0) {
    numDigits++;
    num = Math.floor(num / 10);
  }
  return numDigits;
}

function mostDigits(numbers) {
  let maxDigits = 0;
  for (let number of numbers) {
    numDigitsOfNumber = digitCount(number);
    if (numDigitsOfNumber > maxDigits) {
      maxDigits = numDigitsOfNumber;
    }
  }
  return maxDigits;
}

function radixSort() {

}

module.exports = { getDigit, digitCount, mostDigits, radixSort };