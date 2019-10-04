// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();

const delay = (callback, waitTime) => {
  const delayed = () => {
     return setTimeout(callback, waitTime)
  }
  return delayed
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

// TEST
// Is it working? Check my answer
// delay should create and return a function
// The function returned from delay should only execute the callback after the specified wait time
