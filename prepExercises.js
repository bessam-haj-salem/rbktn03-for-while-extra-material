// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
 
   var i = 0;
   var result = 0;
   function sum(n) { 
   	var i = 0;
   	while ( i < n){
   		result = result + i;
   		i++;
   		}
   	return result;
   }

//  // TODO: your code here 
//  } 
//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15



// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
	var i = 0;
	var result = 1;
function factorial(n) { 
   	while( i < n){
   	result = result * (n - i);
   	i++;
   	}
 return result;
}
//  // TODO: your code here 
//  } 
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120



// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
	var i = 0;
	var result = "";
function repeatString(str, count) { 
	while( i < count){
		result = result + str;
		i++;
	}
	return result;
}

//  // TODO: your code here 
//  } 
//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.




// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.
    //Compute the nth Fibonacci Number: The fibonacci numbers/
    //  // fib(n): 1 1 2 3 5 8 13 21
//  //             | | | | | |  |  |
//  //          n: 0 1 2 3 4 5  6  7

function fib(n){
    var result = 0;
    var x = 1;
    var y;

    while (n >= 0){
         y = x;
         x = x + result;
         result = y;
         n--;
        }
   	return result;
    //Write function that multiply the number by 10 n time   
function multiply10(number, n){
  	var result1 = 1;
  	var i = 0;    	
  	while( i < n ){  		
  		result1 = result1 * 10 
  		i++;
  	}

	return result1 * number;
}

    //Modify your sum function from the Basic Requirements section to accept two parameters, start and end: sum should now compute the sum of the numbers from start to end, e.g.
    // What happens if start is larger than end? Modify sum to check for this case and, when found, swap the start and end arguments.
function sumWhile(a, b){
 	var x = 0;
 	var y = 0;
 	var result = 0;
 	if (a > b){
 		y = a;
 		x = b;
 	    while(x <= y ){
    	result = result + x;
    	x++;
        }
    }

    else{
        while(a <= b ){
    	result = result + a;
    	a++;
        }
    }
	return result ;
 }
    //Write a function product that works like sum, except it should compute the product of the numbers from start to end.
function productWhile(a, b){
 	var x = 0;
 	var y = 0;
 	var result = 1;
 	if (a > b){
 		y = a;
 		x = b;
 	    while(x <= y ){
    	result = result * x;
    	x++;
        }
    }

    else{
        while( a <= b ){
    	result = result * a;
    	a++;
        }
    }
    return result ;
 }    

     // Let's pretend that JavaScript does not have the addition operator + -- instead, it comes with two functions
     // called inc and dec that perform increment and decrement respectively:
function inc(x) {
  	return x + 1;
}
function dec(x) {
  	return x - 1;
}

	
function sumInc(a, b){
	while(b > 0){
		a = inc(a);
		b = dec(b);
	}
	return a;
}

 


// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. 
// Have it return the new string. How can we make sure not to have a comma after the last number?
function counting(n) { 
	var i = 2;
	var result = "";
	var result1 = 1;

		while( i <= n){
		result = result  + ',' + ' ' + i;
		i++;
	}
	return result1 + result;
}

//        // TODO: your code here 
//  } 
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'




// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. 
//You should end up with output looking something like this one for n = 5:
//  welcome 1 
//  welcome 2, meet 1 
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.
function meetAndGreet(n){
	var i = 3;
	var result1 = ""; // for the welcome n
	while( i < n){
		result1 = "welcome" + ' ' + i + "\n" + ' ' + ', meet' + "\n" + counting(n) + "\n" +  "and " + i + 1 + "\n";
		i++;
	}
	return   result1 ;
} 




// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.
//  function reverseString(str) { 
//        // TODO: your code here 
//  } 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.



// 5.Write a javascript program to print all Prime numbers from 1 to n.




// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'




// 7.Write a javascript program to enter any number and print all factors of the number.





// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 11 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8




// 2.Write a javascript program to draw the stars
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *



// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.