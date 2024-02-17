//Question/1

// Store the correct password in a variable
// const correctPassword = "correct";

// Ask the user to enter their password
// const userPassword = prompt("Please enter your password:");

// Validate the entered password
// if (!userPassword) {
    // User did not enter a password
    // alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
    // Entered password matches the correct password
    // alert("Correct! The password you entered matches the original password.");
// } else {
    // Incorrect password
    // alert("Incorrect password.");
// }

//Question/2

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

//Question/3

//a

// const futureStudents = []; // An empty array to store student names in the future

//b

// const futureStudentsObj = new Array(); // Another way to create an empty array

//c

// const fruits = ["apple", "banana", "orange", "grape"]; // An array of fruit names

//d

// const evenNumbers = [2, 4, 6, 8, 10]; // An array of even numbers

//e

// const booleanValues = [true, false, true, true]; // An array of boolean values


//f

// const mixedData = ["apple", 42, true, "banana", false]; // An array with mixed data types


//g

// const qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// An array storing available education qualifications in Pakistan

//Question/4

// no 1

// const colorArray = ["red", "green", "blue", "yellow", "orange"];
// console.log("Initial array of colors:", colorArray);

//no 2

// const newColorStart = prompt("Enter a color to add to the beginning:");
// colorArray.unshift(newColorStart);
// console.log("Updated array (added to beginning):", colorArray);

//no 3

// const newColorEnd = prompt("Enter a color to add to the end:");
// colorArray.push(newColorEnd);
// console.log("Updated array (added to end):", colorArray);

//no 4

// colorArray.unshift("purple", "pink");
// console.log("Updated array (added two colors to beginning):", colorArray);

//no 5

// colorArray.shift();
// console.log("Updated array (removed first color):", colorArray);

//no 6

// colorArray.pop();
// console.log("Updated array (removed last color):", colorArray);

//no  7

// const indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// const colorToAdd = prompt("Enter the color to add:");
// colorArray.splice(indexToAdd, 0, colorToAdd);
// console.log("Updated array (added color at specified index):", colorArray);

//no 8

// const indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// const numColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colorArray.splice(indexToDelete, numColorsToDelete);
// console.log("Updated array (removed colors at specified index):", colorArray);

//Question 5

// Initialize an array with student scores
// const studentScores = [85, 92, 78, 95, 88];

// Sort the array in ascending order
// studentScores.sort((a, b) => a - b);

// Display the sorted array
// console.log("Sorted student scores (ascending order):", studentScores);

//Question 6

 // Array of phone manufacturers
//  var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

 // Write dropdown/select menu
//  document.write('<select id="manufacturerSelect">');
//  for (var i = 0; i < manufacturers.length; i++) {
//    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
//  }
//  document.write('</select>');

 //Question 7

  // Prompt the user to enter the table number
//   var tableNumber = parseInt(prompt("Enter the number for which you want to print the multiplication table:"));

  // Prompt the user to enter the length of the table
//   var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// Convert the input to a number (or use default value of 5 if no input is provided)
// tableNumber  = tableNumber ? parseInt(tableNumber) : 5;

// Display the multiplication table in the browser
// document.write("<h2>Multiplication Table of " +tableNumber  + "</h2>");

// for (var i = 1; i <= 10; i++) {
    // document.write(tableNumber  + " x " + i + " = " + (tableNumber * i) + "<br>");
//}
 
 //Question 8

  // a. Counting
//   document.write("<p>Counting: ");
//   for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // b. Reverse counting
//   document.write("<p>Reverse counting: ");
//   for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // c. Even
//   document.write("<p>Even: ");
//   for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // d. Odd
//   document.write("<p>Odd: ");
//   for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");
//   }
//   document.write("</p>");

  // e. Series
//   document.write("<p>Series: ");
//   for (var i = 1; i <= 10; i++) {
//     document.write((2 * i) + "k, ");
//   }

//Question 9


// Array of items
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
// function searchItem(item) {
  // Convert the item to lowercase for case-insensitive search
//   var lowerCaseItem = item.toLowerCase();

  // Check if the item exists in the array
//   if (A.includes(lowerCaseItem)) {
//     alert("Yes, '" + item + "' is found in the list.");
//   } else {
//     alert("No, '" + item + "' is not found in the list.");
//   }
// }

// Prompt the user to enter the item for searching
// var userInput = prompt("Enter the item you want to search:");

// Call the searchItem function with the user input
// searchItem(userInput);


//QUESTION # 10,11
// var user = prompt("Enter a string:");
// var titleCaseString = user.toLowerCase().split(' ').map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);});
// document.write("Input in title case: " + titleCaseString);


//QUESTION # 12
// var numberValue = +("472");
// document.write("Value: " + numberValue + "<br>");
// document.write("Type: " + typeof(numberValue));