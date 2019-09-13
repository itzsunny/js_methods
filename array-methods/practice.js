// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];



// MAP 


//1
pizzas.map((flavour) => console.log(flavour));
//2
pizzas.map(function dishes(flavour, index) { console.log(flavour, index) });
//3
pizzas.map((flavour) => console.log(flavour.length));
//4
pizzas.map(function dishes(flavour) {
  if (flavour.length <= 9) { console.log(`${flavour} Bad choice`) } else { console.log(`${flavour}good choice`) }
});
//5
var bad_flavoures = [];
var good_flavoures = [];
pizzas.forEach(function dishes(flavour) {
  if (flavour.length <= 10) {
    bad_flavoures.push(flavour);
  } else {
    good_flavoures.push(flavour);
  }
});



//forEach 


//1
pizzas.forEach((flavour) => console.log(flavour));
//2
pizzas.forEach((flavour) => console.log(flavour) + (flavour));
//3
pizzas.forEach(function dishes(flavour) {
  if (flavour) {
    console.log(`length of ${flavour} is ${flavour.length}`);
  }
});
//4
pizzas.forEach((flavour) => console.log(`flavour = ${flavour}`));
//5
var bad_flavoures = [];
var good_flavoures = [];
pizzas.forEach(function dishes(flavour) {
  if (flavour.length < 9) {
    bad_flavoures.push(flavour);
  } else {
    good_flavoures.push(flavour);
  }
});



//filter 


//1
pizzas.filter((flavour) => console.log(flavour));

//2
pizzas.filter(function dish(flavour) {
  return flavour === true;
});

//3
pizzas.filter((flavour) => { flavour = true; flavour === true });

//4
var bad_flavoures = pizzas.filter(flavour => flavour.length < 9);
var good_flavoures = pizzas.filter(flavour => flavour.length > 9);

//5
var bad_flavoures = [];
var good_flavoures = [];
pizzas.filter(function dishes(flavour) {
  if (flavour.length < 9) {
    bad_flavoures.push(flavour);
  }
});
pizzas.filter(function dishes(flavour) {
  if (flavour.length > 9) {
    good_flavoures.push(flavour);
  }
});

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];


//map



//1
cuts.map((styles) =>  {return(styles)});  

//2
cuts.map((styles,index) => {return(`${styles} with index ${index}`)});

//3
cuts.map(function cuts_ (styles) {

})


var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

//map 


//1
numbers.map((integers) => {return(integers)} );

//2
numbers.map((integers) => {return (integers+5)});

//3
numbers.map((integers) => {return(`${integers+1}`)});

//4
numbers.map((integers) => {return (integers%2)});

//5
numbers.map((integers) => {return ((integers/2)*5)});


//forEach 


//1
var even = [];
var odd = [];
numbers.forEach((integers) => {if (integers%2 === 0){
  even.push(integers);
  } else {
  odd.push(integers);
  }
});

//2

var prime_ = [];
numbers.forEach(function prime(integer){
  int ="";
   for(let i =2 ;i % integer === 0 ;int.push(integer)){
     if (int = (int%int ===0)){
       prime_.push(int);
     } else {
       return (`${integer} not a prime number`);
     }
   }
});

//3

var prime_ = [];
let int = [];
numbers.forEach(function prime(integer) {
  if (integer % 2 === 0){
    return (`${integer} is even number`)
  } else if (integer % 2 !== 0){
    int.push(integer);
  }
  int.forEach(($int) => {if (int % int === 0) {prime_.push(int)};} );
  }
);

//4
numbers.forEach( (integer)  => {});
