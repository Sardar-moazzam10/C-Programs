//Easy
// Write a script to log "Hello, World!" to the console.
console.log("Easy Part");
console.log("Question 1");
console.log("Hello, World!");
// Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
console.log("Question 2");
let temperature: number = 0;
if (temperature < 20) {
  console.log("It's cold!");
} else {
  console.log("temperature is normal");
}
// Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
console.log("Question 3");
let apples: number = 10;
let give_away: number = 3;
let left;
left = apples - give_away;
console.log(`Remaining apples: ${left}`);
// Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
console.log("Question 4");
let firstName: string = "Muhammad";
let lastName: string = " Moazzam";
let combines;
combines = firstName + lastName;
console.log(combines);
// Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
console.log("Question 5");
let number: number = 5;
if (number > 3) {
  console.log("Yes");
} else {
  console.log("No");
}
//Medium
// Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
console.log("Medium");
console.log("Question 6");
let calculateArea = (r: any, pi = 3.14) => {
  let areaOfcircle = pi * r * r;
  console.log(`Areaofcircle = ${areaOfcircle}`);
};
console.log(calculateArea(5));
// Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
console.log("Question 7");
for (let i = 1; i <= 50; i++) {
  console.log(i);
  while (i % 3 === 0) {
    console.log(i + " Multiples of 3 ==> Fizz");
    break;
  }
  while (i % 5 === 0) {
    console.log(i + " Multiples of 5 ==> Buzz");
    break;
  }
}
//Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
console.log("Question 8");
let temp = [10, 30, 400, 50, 310];
let heigesttemp = temp[0];
for (let i = 0; i <= 4; i++) {
  console.log(temp[i]);
  if (temp[i] > heigesttemp) {
    heigesttemp = temp[i];
  }
}
console.log(`heigest temperature : ${heigesttemp} `);
//Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
console.log("Question 9");
let aGe: number = 16;
if (aGe >= 18) {
  console.log(`Adult : ${aGe}`);
} else {
  console.log(`Minor (under 18) : ${aGe} `);
}
//Write a function that takes an array of numbers and returns the count of positive numbers in the array.
console.log("Question 10");
let numbers = [-1, 1, -2, 3, 4, 5, 6];
console.log(`Array of number`);
for (let i = 0; i <= 6; i++) {
  console.log(numbers[i]);
}
for (let i = 0; i <= 6; i++) {
  if (numbers[i] > 0) {
    console.log(`Positive numbers in array : ${numbers[i]}`);
  }
}
//Arrays and Array Methods
//Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
console.log(`Question 11`);
function Startingwithlettera(words: any) {
  return words.filter((word: string) => word.startsWith(`a`));
  // word.starts Withfunction to find character start define in javascript
}
let words = ["apple", "orange", "banana", "ali", "ahmad", "avacado"];
console.log(`Array of words`);
for (let i = 0; i <= 5; i++) {
  console.log(`${words[i]}`);
}
let resulT = Startingwithlettera(words);
console.log(`Array starts with letter a`);
console.log(resulT);
//Create a script that logs the second to last element of an array named fruits.
console.log(`Questuin 12`);
let fruits: string[] = [
  "apple",
  "orange",
  "banana",
  "falsa",
  "mango",
  "pineapple",
];
console.log(`Originle Array from one to last`);
for (let i = 0; i <= 5; i++) {
  console.log(`${fruits[i]}`);
}
console.log(` Array from second to last`);
for (let i = 1; i <= 5; i++) {
  console.log(`${fruits[i]}`);
}
//Develop a function that takes an array of numbers and returns a new array with each number squared.
console.log(`Questuin 13`);
console.log(`Find square array`);
function findsquarearray() {
  let array: number[] = [1, 2, 3, 4, 5];
  for (let i = 0; i <= 4; i++) {
    console.log(`${array[i]}`);
  }
  console.log(`Sqare of array `);
  for (let i = 0; i <= 4; i++) {
    array[i] = array[i] * array[i];
    console.log(`${array[i]}`);
  }
}
console.log(findsquarearray());
//Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
console.log(`Question 14`);
function reverseanArray() {
  let Array: number[] = [1, 2, 2, 3, 3, 3];
  console.log(`Array Before Reversing`);
  for (let i = 0; i <= 5; i++) {
    console.log(`${Array[i]}`);
  }
  console.log(`Array After Reversing`);
  for (let i = 5; i >= 0; i--) {
    console.log(`${Array[i]}`);
  }
}
reverseanArray();
//note reverse method let b = 10;
// for (b = 10; b >= 0; b--) {
//   console.log(`${b}`);
// }
// //note order by methos
// for (b = 0; b <= 10; b++) {
//   console.log(`${b}`);
// }
//Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score.
console.log(`Question 15`);
console.log(`Find maximum and minimum score`);
function arrayscore() {
  let array_scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1];
  let maximumscore = array_scores[0];
  let minimumscore = array_scores[0];
  for (let i = 0; i <= 8; i++) {
    console.log(`${array_scores[i]}`);
    if (array_scores[i] > maximumscore) {
      maximumscore = array_scores[i];
    } else {
      minimumscore = array_scores[i];
    }
  }
  console.log(`maximum score exceeded : ${maximumscore}`);
  console.log(`minimum score fall : ${minimumscore}`);
}
arrayscore();
//Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
console.log(`Question 16`);
function removeFalseyValues(arr) {
  return arr.filter((value) => {
    return value;
  });
}
const arr = [0, 1, false, 2, "", 3, null, undefined, 4, NaN, 5];
const filteredArr = removeFalseyValues(arr);
console.log(filteredArr);
//Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
console.log(`Question 17`);
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concatenatedArray = arr1.concat(arr2);
console.log(concatenatedArray);
//Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
console.log(`Question 18`);
function sumOfElements(arr, isEven) {
  return arr.reduce((sum, current) => {
    if ((isEven && current % 2 === 0) || (!isEven && current % 2 !== 0)) {
      return sum + current;
    } else {
      return sum;
    }
  }, 0);
}
const numberss = [1, 2, 3, 4, 5, 6];
console.log(sumOfElements(numbers, true));
console.log(sumOfElements(numbers, false));
//Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
console.log(`Question 19`);
function findElementIndex(arr, eelement) {
  const index = arr.indexOf(eelement);
  return index >= 0 ? index : -1;
}
const array = [1, 2, 3, 4, 5];
console.log(findElementIndex(array, 3));
console.log(findElementIndex(array, 6));
//Write a function to find and return the smallest number in an array of integers.
console.log(`Question 20`);
function findSmallestNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

const numb = [3, 7, 2, 9, 1, 5];
console.log(findSmallestNumber(numb));

//Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
console.log(`Function`);
console.log(`Question 21`);
function calculateProduct(numbe) {
  if (numbe.length === 0) {
    return 0;
  }
  let product = numbe[0];
  for (let i = 1; i < numbe.length; i++) {
    product *= numbe[i];
  }

  return product;
}
const numbe = [2, 3, 4, 5];
console.log(calculateProduct(numbers));
//The function should return an array containing only the strings that are longer than n characters.
console.log(`Question 22`);
function filterByLength(arqr, n1) {
  return arqr.filter((str) => str.length > n1);
}
const strings = ["apple", "banana", "orange", "kiwi"];
console.log(filterByLength(strings, 5));
//Create a function findDuplicates that finds and logs all duplicates in an array.
console.log(`Question 23`);
function findDuplicates(arr) {
  const duplicates = arr.filter(
    (itemm, indexx) => arr.indexOf(itemm) !== indexx
  );
  console.log("Duplicates:", duplicates);
}
findDuplicates([1, 2, 3, 2, 4, 3]);
console.log(`Question 24`);
function incrementAll(arr) {
  return arr.map((num1) => num1 + 1);
}
const numbers1 = [1, 2, 3, 4, 5];
console.log(incrementAll(numbers1));
// Develop a function countOccurrences that counts how many times a specific element appears in an array.
console.log(`Question 25`);
function countOccurrences(arr, element) {
  return arr.reduce((count, current) => {
    return current === element ? count + 1 : count;
  }, 0);
}
const number2 = [1, 2, 3, 2, 4, 2];
console.log(countOccurrences(number2, 2));
console.log(`Question 26`);
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
const SortedArray = [1, 2, 3, 4, 5];
const UnsortedArray = [3, 1, 5, 2, 4];
console.log(isSorted(SortedArray));
console.log(isSorted(UnsortedArray));
console.log(`Question 27`);
function formatNames(names: any) {
  if (names.length <= 2) {
    return names.join(" and ");
  } else {
    const lastTwoNames = names.slice(-2).join(" and ");
    const remainingNames = names.slice(0, -2).join(", ");
    return `${remainingNames}, ${lastTwoNames}`;
  }
}
const namesArray = ["Alice", "Bob", "Charlie", "David"];
console.log(formatNames(namesArray));
console.log(`Question 28`);
function convertToFahrenheit(tempsFahrenheit: any) {
  const tempsCelsius = tempsFahrenheit.map(
    (temp: any) => (temp - 32) * (5 / 9)
  );
  console.log("Temperatures in Celsius:", tempsCelsius);
}

// Example usage:
const tempsFahrenheit = [32, 68, 104];
convertToFahrenheit(tempsFahrenheit);

console.log(`Question 29`);
function minMaxAverage(arr) {
  if (arr.length === 0) {
    return {
      min: undefined,
      max: undefined,
      average: undefined,
    };
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const average = sum / arr.length;

  return {
    min,
    max,
    average,
  };
}
const numbers7 = [1, 2, 3, 4, 5];
console.log(minMaxAverage(numbers7));

console.log(`Question 30`);
function swapElements(arr, index1, index2) {
  // Check if indices are within the bounds of the array
  if (
    index1 >= 0 &&
    index1 < arr.length &&
    index2 >= 0 &&
    index2 < arr.length
  ) {
    // Swap elements at the specified indices
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
  } else {
    console.error("Error: Index out of bounds.");
    return arr;
  }
}

// Example usage:
var myArray = [1, 2, 3, 4, 5];
console.log("Original array:", myArray);
swapElements(myArray, 1, 3);
console.log("Array after swapping elements:", myArray);

console.log(`Question 31`);
function countCharacterOccurrences(str: any, char: any) {
  const regex = new RegExp(char, "g");
  const matches = str.match(regex);

  return matches ? matches.length : 0;
}

const inputString = "hello world";
const character = "o";
console.log(countCharacterOccurrences(inputString, character)); // Output: 2 (character 'o' appears 2 times in the string)

console.log(`Question 32`);
// To-Do List Array of Objects
var todoList = [
  { task: "Finish homework", completed: false },
  { task: "Go to the gym", completed: true },
  { task: "Buy groceries", completed: false },
  { task: "Read a book", completed: true },
  { task: "Call mom", completed: false },
];

// Function to log tasks that are not yet completed
function logIncompleteTasks(todoList: any) {
  console.log("Incomplete Tasks:");
  todoList.forEach(function (item: any) {
    if (!item.completed) {
      console.log(item.task);
    }
  });
}

// Example usage:
logIncompleteTasks(todoList);

console.log(`Question 33`);
function bubbleSort(arr: number[]): number[] {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const unsortedArray: number[] = [5, 3, 8, 1, 2];
const sortedArray: number[] = bubbleSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 5, 8]

console.log(`Question 34`);
function logArrayReverse<T>(arr: T[]): void {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

const MyArray: number[] = [1, 2, 3, 4, 5];
logArrayReverse(MyArray);
console.log(`Question 35`);
//# parameter calculator
let menu = `Calculator using Function`;
console.log(menu);
function calculatoR(numm1: any, numm2: any, operator: any) {
  if (operator === "+") {
    let Sum = `Sum of ${numm1} and ${numm2} is = ${numm1 + numm2}`;
    return Sum;
  } else if (operator === "-") {
    let Sub = `Sub of ${numm1} and ${numm2} is = ${numm1 - numm2}`;
    return Sub;
  } else if (operator === "*") {
    let mul = `Mul of ${numm1} and ${numm2} is = ${numm1 * numm2}`;
    return mul;
  } else if (operator === "/") {
    let Div = `Div of ${numm1} and ${numm2} is = ${numm1 / numm2}`;
    return Div;
  } else {
    return 0;
  }
}
console.log(calculatoR(10, 2, "/"));
