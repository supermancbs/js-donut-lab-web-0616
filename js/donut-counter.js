//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
var donuts = Number.parseInt(prompt("Please enter the number of donuts"))
var guests = Number.parseInt(prompt("Please enter the number of guests")) 


console.log(`There are ${donuts} donuts and ${guests} guests.`)

if (donuts > guests) {
  console.log("We have enough donuts");
    } else {
  console.log("We need more donuts")
}

