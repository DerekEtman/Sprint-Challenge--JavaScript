// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function test(a,b){
  return `I love ${a} with ${b}!`
}

function step1 (arg1, arg2, cb){
  return cb(arg1, arg2);
}

console.log(step1('beans', 'rice', test))


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(arg1, arg2){
  return arg1 +arg2;
}

function multiply(arg1, arg2){
  return arg1*arg2;
}
function greeting(fName, lName){
  return `Hello ${fName} ${lName}, nice to meet you!`
}

function consume(x,y,cb){
  return cb(x,y);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */

consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: After years of meditation, self exploration and some therapy, it has closure within itself. --  Actually, since you are calling nested function inside of myFunction, it inherits all of myFunction's props


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();