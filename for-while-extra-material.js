/*
Longest String
Given an array of strings, find the longest string and print out that string.
hint: strings also have the .length property - i.e `"starburst".length` is 9
*/

// YOUR CODE GOES HERE

function longestString(arr){
	var result = arr[0];
	for( var i = 0 ; i < arr.length ; i++){
		if(result.length < arr[i].length){
			result = arr[i];
		}
	}
	return result;
}

// Will you make it?
// You were camping with your friends far away from home, but when it's time to go back,
//  you realize that you fuel is running out and the nearest pump is 50 miles away! You know that on average,
//   your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, 
//   write a function that tells you if it is possible to get to the pump or not. Function should return true if it is possible and false
//   if not.
//    The input values are always positive.


const zeroFuel = (distanceToPump, mpg, fuelLeft) => (mpg * fuelLeft >= distanceToPump) ? true : false;

// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found
// in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// strCount('Hello', 'o') // => 1
// strCount('Hello', 'l') // => 2
// strCount('', 'z')      // => 0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

function strCount(str, letter){ 
	var arr0 = str.split('');
	var j = 0;
	for( i = 0 ; i < arr0.length ; i++){
		if( arr0[i] = letter){
			j++;
		}
	}
	return j;
}



// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and
// calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. 
// The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. 
// Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
	var result =[];
	var age1 = ages[0];
	var age2 = ages[0];
	for( var i = 0; i < ages.length; i++){
		if(age1 > ages[i]){
		age1 = ages[i];
	}
    }
    for( var j = 0; j < ages.length; j++){
		if(age2 < ages[j]){
		age2 = ages[j];
	}
	}    
	result.push(age1,age2,age2 - age1);
	return result;	
}


// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

function removeEveryOther(arr){
  //your code here
}

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order.

// The numbers could be positive or negative and the first non-consecutive could be either too!

function firstNonConsecutive (arr) {

}

// A hero is on his way to the castle to complete his mission. However, 

// he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 

// our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, 

// will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
//Get Coding!
}


// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
//  "Programmer"	 "Hipster Craft Beer"
//  "Bike Gang Member"	"Moonshine" 
//  "Politician"	"Your tax dollars" 
//  "Rapper"	"Cristal" 
//  *anything else*	"Beer" 
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer."

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, getDrinkByProfession("pOLitiCIaN") should still return "Your tax dollars".

function getDrinkByProfession(param){

}

// It's too hot, and they can't even…
// One hot summer day Pete and his friend Billy decided to buy watermelons. They chose the biggest crate. They rushed home, dying of thirst, and decided to divide their loot, however they faced a hard problem.

// Pete and Billy are great fans of even numbers, that's why they want to divide the number of watermelons in such a way that each of the two parts consists of an even number of watermelons. However, it is not obligatory that the parts are equal.

// Example: the boys can divide a stack of 8 watermelons into 2+6 melons, or 4+4 melons.

// The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, whether they can divide the fruits in the way they want. For sure, each of them should get a part of positive weight.

// Task
// Given an integral number of watermelons w, check whether Pete and Billy can divide the melons so that each of them gets an even amount.

// Examples
// divide(2) === false // 2 = 1 + 1
// divide(3) === false // 3 = 1 + 2
// divide(4) === true  // 4 = 2 + 2
// divide(5) === false // 5 = 2 + 3
// divide(6) === true  // 6 = 2 + 4

function divide(){
	// your Code HERE
}



// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

function tripleTrouble(one, two, three){
  //Solution
}


// You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. 
// Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n){
  //your code here
}


// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  // your code
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
}