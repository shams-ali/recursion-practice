/* Create a function using recursion called numToText which takes a string and returns a new string with all numeric numbers from the input string converted to their corresponding text words. You can assume that the numbers in the string are single digit nubmers. Can you implement this function in two different ways? One way involves creating an inner helper function (or subroutine), the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("5I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
    var objText = { 1: "one",
                      2: "two",
                      3: "three",
                      4: "four",
                      5: "five",
                      6: "six",
                      7: "seven",
                      8: "eight",
                      9: "nine" };
    var res = '';
    if(str.length === 0){
      return res;
    }else{
      if(objText.hasOwnProperty(str[0])){
          res += objText[str[0]];
      }else{
         res += str[0];
      }
      return res + numToText(str.slice(1));
    }
};

console.log(numToText("5I have 5 dogs and 6 ponies"));
