'use strict';

var username = prompt("Please enter your name:")||"John Deo";
var gender = prompt("Please enter your gender (male/female):");

var age = prompt("Please enter your age:");
while (age <= 0) {
    alert("Your age can't be less than or equal to zero!");
    age = prompt("Please enter your age:");
}

var isSkipWelcom = confirm("Do you want to skip the welcoming message?");
if (!isSkipWelcom) {
    var isValidGender = gender == "male" || gender == "female";
    console.log("isValidGender ", isValidGender)
    if (isValidGender) {
        var honorific = gender == "male" ? "Mr. " : "Ms. ";
        var welcomingMessage = "Welcome " + honorific + username;
        alert(welcomingMessage);
    } else {
        alert("");
    }
}

let answers = [
    prompt("Are you married? (Yes/No)") || "Invalid",
    prompt("Are you student? (Yes/No)") || "Invalid",
    prompt("Are you good? (Yes/No)") || "Invalid",
];

answers.forEach(answer => console.log(answer));