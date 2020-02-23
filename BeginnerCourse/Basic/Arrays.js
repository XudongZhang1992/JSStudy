var ourArray = ["John", 23];    // Elements can be different datatypes.

var myArray = ["Quincy", 1];

//  Nested Array
var nestedArray = [["The universe", 42], ["everything", 101010]]

//  Access array elements
var myData = myArray[0];

//  Modify array elements
myArray[0] = "Max";

//  Access multi-dim arrays
var data = nestedArray[1][0];

//  Append data to the end of the array with push()
myArray.push("Hello")

//  Remove the last element from an array with pop()
var removedItem = myArray.pop();

//  Remove the first element from an array with shift()
var hisArray = ["Simpson", "J", ["cat"]];
var removedFirstItem = hisArray.shift();

//  Add an element to the beginning of an array with unshift()
myArray.unshift("Hello");



