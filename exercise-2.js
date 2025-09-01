/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's", //string
  slogan: "Better Ingredients. Better Pizza. Papa John's.", //string
  cuisines: ["italian", "american", "pizza"], //array
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  }, //object literal with numbers
  numberOfStars: 3.5, //number / float
  favorited: false, //boolean
  address: "555 Main Street", //string
  zipcode: 11234, //integer
  acceptsReservations: false, //boolean
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

// function grabCategories(obj) {
//   console.log(Object.keys(obj));
// }

// grabCategories(papaJohns);
// grabCategories(papaJohns.pizzaToppings);

// function verifyValues(obj, values) {
//   return Object.values(obj).length === values;
// }

// console.log(verifyValues(papaJohns, 5));

// console.log(getToppingsInfo(papaJohns));

function getToppingsInfo(obj) {
  return Object.entries(obj.pizzaToppings);
}

papaJohns.printAd = function (topping) {
  //topping becomes local variable
  const toppingPrice = this.pizzaToppings[topping]; //this. references current object
  console.log(
    `Welcome to Papa John's! We are located on 555 Main Street. This week, we are having a sale on ${topping} for $${toppingPrice}. Better Ingredients Better Pizza. Papa John's.`
  );
};

papaJohns.printAd("pepperoni");
