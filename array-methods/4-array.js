var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
sum = 0;
function dogYear (){
  for (var i = 0; i < data.length; i++) {
    if (data[i].type == 'dog') {
      sum += data[i].age * 7;
}
// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
// 2. map - to multiply human year to dog year
// 3. reduce - to accumulate total age.

function dogYear() {
  var typeDog = data.filter(element => element.type == 'dog');
  var dogYear = typeDog.map(element => element.age * 7);
  var sum = dogYear.reduce((x, y) => x + y);

  return sum;
}

dogYear();

// Solution 105
