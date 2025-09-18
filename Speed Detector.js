// Ask the user to enter their speed and convert it to a number
let speed = prompt("Enter the speed")

// Check if speed is 70 or below
if (speed <= 70) {
   console.log("Okay") // Check if speed is 70 or below
}
else {
   // Calculate demerit points for every 5 km/h above 70
   let points = (speed - 70) / 5

   // Round down to the nearest whole number
   points = Math.floor(points);

   // If points are less than 12, license is still valid
   if (points < 12) {
      console.log(`point: ${points}   license is valid`);
   }

   // If points reach 12 or more, license gets suspended
   else {
      console.log("License Suspended")
   }
}
