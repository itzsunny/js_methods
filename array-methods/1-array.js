// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
 var number = Math.max(...numbers);
 console.log(number);
// Find longest string in strings
var long = [];
function longest(strings) {
  let max = -Infinity;
  let maxStr = '';
  strings.forEach(str => {
    if (str.length > max) {
      max = str.length;
      maxStr = str;
    }
  });

  return maxStr;
}

function longestAlt(strings) {
  let max = Math.max(...strings.map(str => str.length));

   strings.forEach(str => {
    if (str.length == max) {
      console.log(str);
      return str;
    }
  })
}
console.log(longest(strings));
// Find all the even numbers
numbers.map()

// Find all the odd numbers

// Find all the words that contain 'is' use string method 'includes'

// Find all the words that contain 'is' use string method 'indexOf'

// Check if all the numbers in numbers array are divisible by three use array method (every)

//  Sort Array from smallest to largest

// Remove the last word in strings

// Add a new word in the array

// Remove the first word in the array

// Place a new word at the start of the array use (upshift)

// Make a subset of numbers array [18,9,7,11]

// Make a subset of strings array ['a','collection']

// Replace 12 & 18 with 1221 and 1881

// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname

// Sort the array created above alphabetically
