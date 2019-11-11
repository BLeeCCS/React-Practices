/* eslint-disable no-console, no-unused-vars */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

var double = numbers.map(value => value * 2);
console.log("double = ",double);

var prices = numbers.map(value => "$" + value.toFixed(2));
console.log("prices = ", prices);

var upperCased = languages.map(word => word.toUpperCase());
console.log("upperCased = ",upperCased);

var firstLetters = languages.map(word => word.charAt(0));
console.log("firstLetters = ",firstLetters);