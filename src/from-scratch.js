// Create callback functions for Higher-Order Functions:
const logEachValue = (arrValues) => {
  let index = arrValues[0];
  for (let i = 0; i < arrValues.length; i++) {
    index = [i];
    console.log(`Value: ${arrValues[i]}, index: ${index}.`);
  }
};

const makePeopleHappy = () => { };

const getEvenNumbers = () => { };

const doubleEveryNumber = () => { };

const convertToBooleans = () => { };

// Create your own Higher Order Functions:
const myForEach = () => { };

const myMap = () => { };

const myFilter = () => { };

const myFind = () => { };

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
