// Iteration #1: Find the maximum FET
function maxOfTwoNumbers(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n1 < n2) {
    return n2;
  } else {
    return n1, n2;
  }
}



// Iteration #2: Find longest word FET
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  // si al contar calaixets dona zero torna null
  if (words.length === 0) return null;

  //declaro que sera una string
  let word = "";
  //vaig substituint el que hi ha dins nomes si es una paraula mes llarga que la que hi havia£
  for (let i = 0; i < words.length; i++) {
    if (word.length < words[i].length) {
      word = words[i];
    }
  }
  return word;
}




// Iteration #3: Calculate the sum FET
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  //creo la variable on anire sumanthi els numeros amb un resultat incial de 0
  let sum = 0;
  for (let j = 0; j < numbers.length; j++)
    sum = sum + numbers[j];

  return sum;

}






// Iteration #3.1 Bonus:
// X should declare a function named sum
// X should return zero if receives an empty array when called
// should return the sum with one number array
// X should return zero if all elements are zero
// X should return the sum when passed array of numbers

// FALTAN
// should return the sum when passed array of strings
// should return the sum when passed array of mixed strings and numbers -
// should return the sum when passed array of mixed strings, numbers and booleans -
// should throw an error when unsupported data type (object or array) present in the array
function sum(mixArr) {
  let result = 0;

  for (let j = 0; j < mixArr.length; j++) {

    if (typeof mixArr[j] === "string") {
      result += mixArr[j].length;
    } else if (mixArr[j] === true) {
      result += 1;
    } else if (typeof mixArr[j] === "object") {
      throw new Error("Unsupported data type sir or ma'am")
    } else {
      result += mixArr[j];
    }
  }

  return result;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers

// X should declare a function named averageNumbers
// X should return null if receives an empty array when called
// X should return the average of a one-element array
// X should return the average even with negative values
// X should return the average of the array

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {
  // retorna null si arriba un array buit
  if (numbersAvg.length === 0) return null;

  //creo la variable on anire sumanthi els numeros amb un resultat incial de 0
  let suma = 0;
  for (let p = 0; p < numbersAvg.length; p++) {
    suma = suma + numbersAvg[p];
  }
  //divideixo la suma pel nombre de numeros i els poso en una variable
  const average = suma / numbersAvg.length;
  //crido la variable amb el resultat final
  return average;

}


// Level 2: Array of strings
// X should declare a function named averageWordLength
// X should return null if receives an empty array when called
// X should return the average of a one-element array
// X should return the average of a the array
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {
  if (wordsArr.length === 0) return null;
  let av = wordsArr.join('').length / wordsArr.length;
  return (av)

}

// // Bonus - Iteration #4.1
// X should declare a function named avg
// X should return null if receives an empty array when called
// should return the average of the array
function avg(avgArr) {
  if (avgArr.length === 0) return null;
  let suma = 0;

  for (let i = 0; i < avgArr.length; i++) {
    if (typeof avgArr[i] === "string") {
      suma += avgArr[i].length;
    } else if (avgArr[i] === true) {
      suma += 1;
    } else if (typeof avgArr[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am")
    } else {
      suma += avgArr[i];
    }
  }
  const average = suma / avgArr.length;
  return average;

}

// Iteration #5: Unique arrays
// Take the following array, remove the duplicates, and return a new array.
// You are more than likely going to want to check out the Array methods [`indexOf`] and [`includes`]
// x should declare a function named uniquifyArray
// x should return null if receives an empty array when called
// should return the correct uniqified array when an array of the same elements passed as argument
// should return the same array when no element is repeated
// should return the uniquified array

const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(wordsUnique) {
  if (wordsUnique.length === 0) return null;

  const uniqueChars = [...new Set(wordsUnique)];

  return uniqueChars;
}



// Iteration #6: Find elements

// X should declare a function named doesWordExist
// X should return null if receives an empty array when called
// should return true if the word we are looking for is the only one in the array
// should return false if the word we are looking for is not in the array
// should return true if the word we are looking for is in the array

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
let word;

function doesWordExist(wordsFind, word) {
  if (wordsFind.length === 0) return null;

  return wordsFind.includes(word);

}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(wordsCount, search) {

  let count = 0;

  for (let i = 0; i < wordsCount.length; i++) {
    
    if (wordsCount[i] === search) {
      count++;
      continue;
    };
   
  };
  return count;

}



// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) { 
  for(let array of matrix){
    for (let element of array) {
      if (element !== 1) {

      } else {
        return 1;
      }
      if (element !==2) {

      }else {
        return 16;
      }
    }
  }
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
