// Ceate a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values

const saveOutput = (callback, password) => {
  let output = {}
  const inner = (arg) => {
    if (arg === password){
      return output
    }
    return output[arg] = callback(arg)
  }
  return inner
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = savsaeOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

// Test
// Is it working? Check my answer
// saveOutput should create and return a function
// The function returned from saveOutput should behave exactly like the passed-in function when not called with the password string
// The function returned from saveOutput should return an object with all previously passed-in arguments and outputs when called with the password string
