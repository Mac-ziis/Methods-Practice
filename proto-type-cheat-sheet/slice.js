//Slice, reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
// The `slice()` method returns a new array containing elements from the original array starting from the specified index (2 in this case) to the end of the array.

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
// The `slice()` method returns a new array containing elements from the original array starting from the specified start index (2) and up to, but not including, the specified end index (4).

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
// The `slice()` method returns a new array containing elements from the original array starting from the specified start index (1) and up to, but not including, the specified end index (5).

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
// The `slice()` method returns a new array containing the last `n` elements from the original array, where `n` is the absolute value of the negative argument (-2 in this case).

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
// The `slice()` method returns a new array containing elements from the original array starting from the specified start index (2) and up to, but not including, the element at the specified negative end index (-1).

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
// The `slice()` method called without any arguments returns a shallow copy of the original array, effectively creating a duplicate array.

