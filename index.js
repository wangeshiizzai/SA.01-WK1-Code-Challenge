// Ask the user to enter their marks
const marks = prompt("Enter your marks:")

// Check if marks are greater than 79
if (marks > 79) {
   console.log("A")
}// Grade A

// Check if marks are between 60 and 79 (inclusive)
else if (marks >= 60 && marks <= 79) {
   console.log("B");// Grade B
}

// Check if marks are between 49 and 59 (inclusive)
else if (marks >= 49 && marks <= 59) {
   console.log("C");// Grade C
}

// Check if marks are between 40 and 48 (inclusive)
else if (marks >= 40 && marks <= 48) {
   console.log("D");// Grade D
}

// Check if marks are less than 40
else if (marks < 40) {
   console.log("E");// Grade E
}

// If input is not a valid number
else {
   console.log("invalid input");
}

