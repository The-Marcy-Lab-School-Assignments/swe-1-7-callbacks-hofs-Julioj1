// Create callback functions for Higher-Order Functions:
const logEachValue = (arrValues) => {
  arrValues.forEach((element, index) => {
    console.log(`Value: ${element}, index: ${index}.`);
  });
};

const makePeopleHappy = (arrOfObjects) => {
  for (let i = 0; i < arrOfObjects.length; i++) {
    if (arrOfObjects[i].isHappy === false) {
      arrOfObjects[i].isHappy = true;
    }
  }
};

const getEvenNumbers = (arrOfNumbers) => {
  const newArrOfNumbers = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] % 2 === 0) {
      newArrOfNumbers.push(arrOfNumbers[i])
    }
  }
  return newArrOfNumbers;
};

const doubleEveryNumber = (arrOfNumbers) => {
  const newArrOfNumbers = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    newArrOfNumbers.push(arrOfNumbers[i] * 2);
  }
  return newArrOfNumbers;
};

const convertToBooleans = (arrOfValues) => {
  const newArrOfValues = [];
  for (let i = 0; i < arrOfValues.length; i++) {
    if (arrOfValues[i]) {
      newArrOfValues.push(true)
    } else if (!arrOfValues[i]) {
      newArrOfValues.push(false);
    }
  }
  return newArrOfValues;
};

// Create your own Higher Order Functions:
const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
};

const myMap = (array, transform) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(transform(array[i]));
  }
  return newArray;
};

const myFilter = (array, test) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      newArray.push(array[i])
    } else {
      continue;
    }
  }
  return newArray;
};

const myFind = (array, test) => {
  for (let i = 0; i < array.length; i++) {
    if (test(array[i])) {
      return array[i]
    } else {
      continue;
    }
  }
};

// Use Array.sort() and provide the correct callback sorting function:
module.exports = {
  logEachValue,
  makePeopleHappy,
  getEvenNumbers,
  doubleEveryNumber,
  convertToBooleans,
  myForEach,
  myMap,
  myFind,
  myFilter,
};
