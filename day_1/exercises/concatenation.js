/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A few are completed for you, to provide an example.

You should be able to run this
file from your terminal with the command `node day_1/exercises/concatenation.js`
*/

// example: Write code that combines the variables below into another string:
var name = "Ron";
var team = "Chudley Cannons";

console.log("The " + team + " are " + name + "'s favorite Quidditch team");

The Chudley Cannons are Ron's favorite Quidditch team

// What happens if you include other data types when you use concatination? What data type is logged after we run this code?

var number = 7;
var creatures = "unicorns";

console.log("My zoo has " + number + " " + creatures + "!")

My zoo has 7 unicorns!

 // Write code that combines the variables below into a string that
 // reads "The quick red fox jumped over the lazy brown dog":
 
var speedy = "quick red fox";
var slowPoke = "lazy brown dog";

<<<<<<< HEAD
console.log("The " + speedy + " jumped over the " + slowPoke);

=======

console.log("The " + speedy + " jumped over the " + slowPoke);

The quick red fox jumped over the lazy brown dog

>>>>>>> e8e4813840036382608cae25d28621e9bacea929
// Write code that combines the variables below into a string that
// reads "In a predictable result, the tortoise beat the hare!"
// Note that we are omitting the var keyword below, because we are re-assigning the variables

slowPoke = "tortoise";
speedy = "hare";

console.log("In a predictable result, the " + slowPoke + " beat the " + speedy + "!") 
