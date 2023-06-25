//Reduce, reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//Note that reduce really just takes a call back function here, in this case we've used a simple one.
//The accumulator is the first parameter of the callback function passed to the reduce() method. It holds the accumulated value previously returned in the last invocation of the callback—or initialValue, if it was supplied (see below).
//The currentValue is the second parameter of the callback function passed to the reduce() method. It holds the value of the current element being processed.
//The index is the third parameter of the callback function passed to the reduce() method. It holds the index of the current element being processed.
//The array is the fourth parameter of the callback function passed to the reduce() method. It holds the original array on which the reduce() method was called.
//The initialValue is the second parameter of the reduce() method. It holds the initial value of the accumulator. If it is not supplied, the first element of the array will be used as the initial value of the accumulator and currentValue will start from the second element.
//The complete syntax of the reduce() method is as follows:
// numbers.reduce((accumulator, currentValue, index, array) => accumulator + currentValue, initialValue);

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// Expected output: 15
// The `reduce()` method applies the provided function to each element of the array (numbers) and accumulates the result. In this example, it sums up all the numbers starting from an initial value of 0.

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product);
// Expected output: 120
// The `reduce()` method applies the provided function to each element of the array (numbers) and accumulates the result. In this example, it multiplies all the numbers starting from an initial value of 1.

const concatenatedString = numbers.reduce((accumulator, currentValue) => accumulator + currentValue.toString(), '');
console.log(concatenatedString);
// Expected output: "12345"
// The `reduce()` method applies the provided function to each element of the array (numbers) and accumulates the result. In this example, it concatenates all the numbers converted to strings starting from an empty string as the initial value.

const maxNumber = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
console.log(maxNumber);
// Expected output: 5
// The `reduce()` method applies the provided function to each element of the array (numbers) and accumulates the result. In this example, it finds the maximum number in the array starting from an initial value of negative infinity.

const average = numbers.reduce((accumulator, currentValue, index, array) => {
    accumulator += currentValue;
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}, 0);
console.log(average);
// Expected output: 3
// The `reduce()` method applies the provided function to each element of the array (numbers) and accumulates the result. In this example, it calculates the average of the numbers starting from an initial value of 0. It also includes handling the last element to return the final average.

const flattenedArray = [[1, 2], [3, 4], [5]].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattenedArray);
// Expected output: [1, 2, 3, 4, 5]
// The `reduce()` method applies the provided function to each element of the array (nested arrays) and accumulates the result. In this example, it flattens the nested arrays into a single array starting from an empty array as the initial value.
