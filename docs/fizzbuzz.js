const myNumbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

function fizzBuzz(numbers) {
  function makeNumbers() {
    for (let i = startIndex; i <= stopIndex; i++) {
      newNumbers.push(i);
      return makeNumbers();
    }
  }
  const fBArray = newNumbers
    .map(number => (number % 3 == 0 && number % 5 == 0 ? 'fizzbuzz' : number))
    .map(number => (number % 3 == 0 ? 'fizz' : number))
    .map(number => (number % 5 == 0 ? 'buzz' : number));
  return fBArray;
}

console.log(fizzBuzz(myNumbers));

/*function bigFunction(startIndex, stopIndex, threeCallBack, fiveCallBack) {
  function getNumbers() {
    for (let i = startIndex; i <= stopIndex; i++) {
      newNumbers.push(i);
      return newNumbers();
    }
    const threeOrFive = newNumbers
      .map(number => (number % 3 == 0 ? threeCallBack : number))
      .map(number => (number % 5 == 0 ? fiveCallBack : ''));
    return threeOrFive.filter(number !== '');
  }
}

console.log(bigFunction(0, 10, 'sayThree', 'sayFive'));*/
