// ASSESSMENT 6: Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."

// Declare a function that takes in an array of objects
const personBioGenerator = (arr) => {
  // Map through that array
  let sentenceArray = arr.map(value => {
  // Set variable to equal index number of last name
  let lastNameIndex = value.name.indexOf(" ") + 1
  // Set local variable of name capitalized that takes the name key value and uses substring to capitalize first letter and lastNameIndex letter
  let nameCapitalized = value.name.substring(0,1).toUpperCase() + value.name.substring(1, lastNameIndex) + value.name.substring(lastNameIndex, lastNameIndex + 1).toUpperCase() + value.name.substring(lastNameIndex + 1)
  // Return a string interpolation that targets both the name and occupation key values
    return `${nameCapitalized} is a ${value.occupation}`
  })
  // Print each statement outside of the array
  return sentenceArray.join("\n")
}

console.log(personBioGenerator(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the remainder of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// Declare a function that takes in an array of mixed data
const modulo3Array = (arr) => {
  // Filter through that array and only return numbers
  let numberArray = arr.filter(value => typeof(value) === "number")
  // Map through number array and return the modulo of three
  return numberArray.map(num => {
    return num % 3
  })
}

console.log(modulo3Array(testingArray1))
console.log(modulo3Array(testingArray2))

// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]

// Declare a function that takes in indefinite number of arrays
const noDups = (...arr) => {
  // Set local variable that joins the arrays via spread operator
  let joinedArr = [...arr]
  // Set empty array to hold final array
  let finalArr = []
  // Map through the joined array to access the inner values to push to empty array
  joinedArr.map(outerValue => {
    outerValue.map(innerValue => finalArr.push(innerValue))
  })
  // Filter through the final array
  return finalArr.filter((value, index) => {
    // Only return values who's first index position of that value equals the current index
    return finalArr.indexOf(value) === index
  })
}

console.log(noDups(testingArray3, testingArray4))
