
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of max(20,10) is 10  " + myFunctionTest(10, max(20, 10)));

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);

}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));

console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(str){
var vowelArr = ['a', 'e', 'i', 'o','u','A','E','I','O','U'];// all vowels
var strFirstChar=str.charAt(0);
var res=false;
for (var i = 0; i < vowelArr.length; i++) {
  if (strFirstChar==vowelArr[i])
  {
  	res=true;
  }
}
	return res;
}
console.log("Expected output of isVowel('Apple') is A  return true " + myFunctionTest(true, isVowel('Apple')));
console.log("Expected output of isVowel('Hannah') is H  return false " + myFunctionTest(false, isVowel('Hannah')));



//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
	function reverse(str){
		  let reversedString = '';
		    for (let i = str.length - 1; i >= 0; i--) {
		    	    reversedString += str[i];
		    	}
		    	return reversedString;
	}
console.log("Expected output of reverse('Hello') is olleH  " + myFunctionTest('olleH', reverse('Hello')));
console.log("Expected output of reverse('Hello') is Hello  " + myFunctionTest('Hello', reverse('Hello')));

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(strArray){
  var longestWord = 0;
  for(var i = 0; i < strArray.length; i++){
    if(strArray[i].length > longestWord){
	longestWord = strArray[i].length;
     }
  }
  return longestWord;
}
console.log("Expected output of findLongestWord(['Hello','this','is','HannahGail']) is 10 " + myFunctionTest(10, findLongestWord(['Hello','this','is','HannahGail'])));
console.log("Expected output of findLongestWord(['Hello','this','is','HannahGail']) is 9 " + myFunctionTest(9, findLongestWord(['Hello','this','is','HannahGail'])));






function filterLongWords(strArray,num) {
  var longestWord = 0;
  const longerWord = [];
  for(var i = 0; i < strArray.length; i++){
  		if(strArray[i].length>num)
  		{
  					longerWord.push(strArray[i]);
  				}

  }
  return longerWord.toString();
}
 	console.log("Expected output of findLongestWord(['Hello','this','is','HannahGail'],9) is HannahGail " + myFunctionTest('HannahGail',filterLongWords(['Hello','this','is','HannahGail'],9)));	
  console.log("Expected output of findLongestWord(['Hello','this','is','HannahGail'],10) is HannahGail " + myFunctionTest('HannahGail',filterLongWords(['Hello','this','is','HannahGail'],10)));  


 	 	const a=[1,3,5,3,3];

		const b=a.map(function(elem,i,array){
		return elem*10;
		alert(elem*10);
		})//[4,6,8,6,6]

		const c=a.filter(function(elem,i,array){
		return elem ==3;});//[1,5]


		const d=a.find(function(elem) {return elem>1;});//3
		const e=a.findIndex(function(elem) {return elem>1;}); //1

		const f=a.reduce(function(accumulator,elem){
		return accumulator+elem;},0); //0 is initial value, 15, syn

		//a) multiply each element by 10; 

		//b) return array with all elements equal to 3; 

		//c) return the product of all elements;