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
numbers.filter(even => {if (even % 2 == 0) return even;});

// Find all the odd numbers
numbers.filter(even => {if (even % 2 !== 0) return even;});
// Find all the words that contain 'is' use string method 'includes'
strings.filter(str => {if (str.includes("is")) return str;});

// Find all the words that contain 'is' use string method 'indexOf'
strings.map((str,i) => {if (str.includes("is")) return i});

// Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.filter(num => {if(num % 3 == 0) return num});
numbers.map(num => {if(num % 3 == 0) return num});
numbers.forEach(num => {if(num % 3 == 0) console.log(num)});
numbers.every(num =>{ (num %3 == 0)});
//  Sort Array from smallest to largest
numbers.sort((a,b) => {return (a-b)});
// Remove the last word in strings
function remove(strings) {
  strings.pop();
  return strings; 
}
// Add a new word in the array
function add(strings) {
  strings.push("strings");
  return strings; 
}

// Remove the first word in the array
function remove_first(strings) {
  strings.shift()
  return strings; 
}
// Place a new word at the start of the array use (upshift)
function add_first(strings) {
  strings.unshift("THIS")
  return strings; 
}
// Make a subset of numbers array [18,9,7,11]
function sub(numbers) {
  sub = numbers.splice(3,4);
  return sub;
}

// Make a subset of strings array ['a','collection']

function sub(strings) {
  sub = strings.splice(2,2);
  return sub;
}
// Replace 12 & 18 with 1221 and 1881
function replace(numbers) {
  numbers.splice(1,1,1221);
  numbers.splice(3,1,1881);
  return numbers;
}


// Replace words with string in strings array

function replace(strings) {
  strings.splice(5,1,"string");
  return strings;
}

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
customers.filter(customers_ => {if (customers_["firstname"].includes('J')) return customers_});
// Create new array with firstname and lastname
var firstName = [];
var lastName = [];
customers.filter(customers_ => {firstName.push(customers_.firstname);lastName.push(customers_.lastname)});
// Sort the array created above alphabetically
firstName.sort();
lastName.sort();
