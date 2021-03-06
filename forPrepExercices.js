// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that comp{utes the sum of the numbers in an array.
function sum(arr){
	var result = 0;
	for(var i = 0 ; i <= arr.length - 1 ; i++){	
		result = result + arr[i];
	}
	return result;
}
// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
function max(arr){
	var result  = arr[0];
	for(var i = 0 ; i < arr.length ; i++){	
		if(result < arr[i]){
			result = arr[i];
		}
	}
	return result;

}



// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.
 function longestString(str){
 	var result0 = str.split(',');
 	var result1 = result0[0];
  	for(var i = 0; i < result0.length ; i++){
 		if(result1.length < result0[i].length){
 			result1 = result0[i];
 		}
 	}
 	return result1;
 }


// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

   function remove(array, element) {
   	var arr1 = [];
   	for (var i = 0; i < array.length ; i++){
   	
   		if(array[i] !== element){
   		arr1.push(array[i]);
   		}
   	}
   	return arr1;
}
//  // your code here
//  }
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.
 function evens(array){
 	var arr1 = [];
 	for(var i = 0; i < array.length; i++){
 		if (array[i] % 2 === 0){
 			arr1.push(array[i]);
 		}
 	}
 	return arr1;
 }
// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
  function average(array){
 	var result = 0;
 	for(var i = 0; i < array.length; i++){
 		result = result + array[i];
 	}
 	return result / array.length;
 }
// 2. Write a function called min that finds the smallest number in an array of numbers.
  function min(array){
 	var result = array[0];
 	for(var i = 0; i < array.length; i++){
 		if(result > array[i]){
 			result = array[i];
 		}
 	}
 	return result;
 }
// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function shortestString(str){
 	var result0 = str.split(',');
 	var result1 = result0[0];
  	for(var i = 0; i < result0.length ; i++){
 		if(result1.length > result0[i].length){
 			result1 = result0[i];
 		}
 	}
 	return result1;
 }

// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of 
//times that the character occurs in the string.
function countchar(str,chr){
	var result0 = str.split('');
	var result1 = result0[0];
	var j = 0;
	for(var i = 0; i < result0.length; i++){
		if(result1 === chr){

			j++;
		}
	}
	return j;
}
// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have 
//an even length.
function evenLengthWords(array){
  	var arr1 =[];
  	for(var i = 0; i < array.length; i++){
  		if(array[i].length % 2 === 0){
  			arr1.push(array[i])
  		}
  	}
  	return arr1;

  }
// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that
// string reversed
function reverse2(str){
 	var arr0 = str.split('');
 	var arr1 = [];
 	for(var i = arr0.length ; i >= 0; i--){
 		arr1.push(arr0[i]);
 	}
 	return arr1.join('');
}
// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, 
//an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords
// without changing the keep function.
function keepThat(evens, array){
	return evens();
}