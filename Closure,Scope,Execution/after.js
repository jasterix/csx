// Challenge: after
// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

aconst after = function(number, callback, timesCalled = 0){
  let cachedResult
  const thrice = function(...args){
    timesCalled++
  	if (timesCalled >= number){
      cachedResult = callback(...args)
    }
    return cachedResult
  }
  return thrice
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

// Tets
// Is it working? Check my answer
// after should create and return a function
// The function returned from after should not run the callback before it has been called count times
// The function returned from after should run the callback (with arguments) after count calls
