//Map, reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//The `map()` method creates a new array by calling the provided function on each element of the original array.
//Simple objects
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
// Expected output: Array [2, 4, 6, 8, 10]
// The `map()` method creates a new array by calling the provided function on each element of the original array (numbers), and returns an array of the results (each number multiplied by 2 in this case).

const squareRoots = numbers.map((num) => Math.sqrt(num));
console.log(squareRoots);
// Expected output: Array [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]
// The `map()` method creates a new array by calling the provided function on each element of the original array (numbers), and returns an array of the results (square root of each number in this case).

const negativeNumbers = numbers.map((num) => -num);
console.log(negativeNumbers);
// Expected output: Array [-1, -2, -3, -4, -5]
// The `map()` method creates a new array by calling the provided function on each element of the original array (numbers), and returns an array of the results (each number negated in this case).

const evenOrOdd = numbers.map((num) => {
  return {
    number: num,
    isEven: num % 2 === 0,
  };
});
console.log(evenOrOdd);
// Expected output: Array of objects [{number: 1, isEven: false}, {number: 2, isEven: true}, {number: 3, isEven: false}, {number: 4, isEven: true}, {number: 5, isEven: false}]
// The `map()` method creates a new array by calling the provided function on each element of the original array (numbers) and returning a new object with additional properties (isEven in this case) for each number.

const numberInfo = numbers.map((num, index) => {
  return {
    number: num,
    index: index,
    squared: num * num,
  };
});
console.log(numberInfo);
// Expected output: Array of objects [{number: 1, index: 0, squared: 1}, {number: 2, index: 1, squared: 4}, {number: 3, index: 2, squared: 9}, {number: 4, index: 3, squared: 16}, {number: 5, index: 4, squared: 25}]
// The `map()` method creates a new array by calling the provided function on each element of the original array (numbers) and returning a new object with additional properties (index and squared in this case) for each number.



//Complex objects
const books = [
    {
      title: "The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
    },
    {
      title: "The Two Towers",
      author: "J.R.R. Tolkien",
    },
    {
      title: "The Return of the King",
      author: "J.R.R. Tolkien",
    },
  ];
  
  const bookTitles = books.map((book) => book.title);
  console.log(bookTitles);
  // Expected output: Array ["The Fellowship of the Ring", "The Two Towers", "The Return of the King"]
  // The `map()` method creates a new array by calling the provided function on each element of the original array (books), and returns an array of the results (book titles in this case).
  
  const bookAuthors = books.map((book) => book.author);
  console.log(bookAuthors);
  // Expected output: Array ["J.R.R. Tolkien", "J.R.R. Tolkien", "J.R.R. Tolkien"]
  // The `map()` method creates a new array by calling the provided function on each element of the original array (books), and returns an array of the results (book authors in this case).
  
  const bookDetails = books.map((book) => {
    return {
      title: book.title,
      author: book.author,
      year: new Date().getFullYear(),
    };
  });
  console.log(bookDetails);
  // Expected output: Array of objects [{title: "The Fellowship of the Ring", author: "J.R.R. Tolkien", year: <current year>}, {title: "The Two Towers", author: "J.R.R. Tolkien", year: <current year>}, {title: "The Return of the King", author: "J.R.R. Tolkien", year: <current year>}]
  // The `map()` method creates a new array by calling the provided function on each element of the original array (books) and returning a new object with additional properties (year in this case) for each book.
  
  const bookTitlesUpperCase = books.map((book) => book.title.toUpperCase());
  console.log(bookTitlesUpperCase);
  // Expected output: Array ["THE FELLOWSHIP OF THE RING", "THE TWO TOWERS", "THE RETURN OF THE KING"]
  // The `map()` method creates a new array by calling the provided function on each element of the original array (books), and returns an array of the results (book titles converted to uppercase in this case).  