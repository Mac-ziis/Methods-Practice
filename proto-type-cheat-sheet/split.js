//Split reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

const sentence = "Hello, world! How are you today?";

const words = sentence.split(" ");
console.log(words);
// Expected output: Array ["Hello,", "world!", "How", "are", "you", "today?"]
// The `split()` method splits a string into an array of substrings based on a specified separator (in this case, a space " "). Each substring is a word in the sentence.

const characters = sentence.split("");
console.log(characters);
// Expected output: Array ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", "!", " ", "H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "t", "o", "d", "a", "y", "?"]
// The `split()` method splits a string into an array of substrings based on an empty string (""). Each substring is a single character from the original string.

const parts = sentence.split("o");
console.log(parts);
// Expected output: Array ["Hell", ", w", "rld! H", "w are y", "u t", "day?"]
// The `split()` method splits a string into an array of substrings based on a specified separator ("o" in this case). Each substring is separated wherever the separator occurs.

const limitedParts = sentence.split(" ", 3);
console.log(limitedParts);
// Expected output: Array ["Hello,", "world!", "How"]
// The `split()` method splits a string into an array of substrings based on a specified separator (space " "). The third argument (3) limits the number of elements in the resulting array to 3.

const noSeparator = sentence.split();
console.log(noSeparator);
// Expected output: Array ["Hello, world! How are you today?"]
// The `split()` method called without any separator returns an array with a single element, which is the original string itself.
