// Create callback functions for Higher-Order Functions:
const logEachValue = (arrValues) => {
  arrValues.forEach((element, index) => {
    console.log(`Value: ${element}, index: ${index}.`);
  });
};

const makePeopleHappy = (arrOfObjects) => {
  arrOfObjects.forEach((person) => {
    person.isHappy = true;
  });
};

const getEvenNumbers = (arrOfNumbers) => {
  return arrOfNumbers.filter((num) => num % 2 === 0);
};

const doubleEveryNumber = (arrOfNumbers) => {
  return arrOfNumbers.map((num) => num * 2);
};

const convertToBooleans = (arrOfValues) => {
  return arrOfValues.map((value) => Boolean(value));
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
