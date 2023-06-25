//Trim reference here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const text = "   Hello, world!   ";

const trimmedText = text.trim();
console.log(trimmedText);
// Expected output: "Hello, world!"
// The `trim()` method removes leading and trailing whitespace from a string, returning a new string with the whitespace removed.

const leftTrimmedText = text.trimLeft();
console.log(leftTrimmedText);
// Expected output: "Hello, world!   "
// The `trimLeft()` method (also known as `trimStart()`) removes leading whitespace from a string, returning a new string with the leading whitespace removed.

const rightTrimmedText = text.trimRight();
console.log(rightTrimmedText);
// Expected output: "   Hello, world!"
// The `trimRight()` method (also known as `trimEnd()`) removes trailing whitespace from a string, returning a new string with the trailing whitespace removed.

const noWhitespaceText = text.trim();
console.log(noWhitespaceText);
// Expected output: "Hello, world!"
// In this case, the original string does not contain any leading or trailing whitespace, so calling `trim()` has no effect on the string.

const whitespaceOnlyText = "   ";
const emptyText = whitespaceOnlyText.trim();
console.log(emptyText);
// Expected output: ""
// The `trim()` method removes all leading and trailing whitespace from a string. In this case, the string consists only of whitespace characters, so calling `trim()` results in an empty string.
