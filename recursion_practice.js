/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit nubmers. Can you implement this function in two different ways? One way involves creating an inner helper function, the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

/* Pseudo code solution with inner recursive*/
var numToText = function(str) {
  //Create an object with keys as numeric numbers and values as corresponding strings
  //Create a variable called result set equal to empty string

  //Declare a recursive helper function that takes a string as a parameter
    //Base case: if string.length = 0
      //return result
    //else check if first char of the string is a key in the numbers object
      //concat the value of number prop to result
    //else concat the origin char to result
    //Return recursive call, parameters: sliced string and result

  //call recursive helper function with str as the input
  //return result

};

 Solution with inner recursive function
var numToText = function (str) {
  var numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };

  var result = '';

  var createNewString = function(string) {
    if(string.length === 0) {
      return result;
    } else {
      var currentChar = string.charAt(0);
      if(numbers.hasOwnProperty(currentChar)) {
        result = result.concat(numbers[currentChar]);
      } else {
        result = result.concat(currentChar);
      }
      return createNewString(string.slice(1));
    }
  };

  createNewString(str); /* what would happen if you returned this line instead of the next one */
  return result;
};


var numToText = function(str) {
  var numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero'
  };

  var result = arguments[1] || '';
  if(str.length === 0) {
    return result;
  } else {
    var currentChar = str.charAt(0);
    var newChar = '';
    if(numbers.hasOwnProperty(currentChar)) {
      newChar = numbers[currentChar];
    } else {
      newChar = currentChar;
    }
    return numToText(str.slice(1), result.concat(newChar));
  }
};

debug(numToText('I have 5 dogs and 2 cats'));
