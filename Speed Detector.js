let speed = prompt ("Enter the speed")
if (speed <=70) {
   console.log("Okay")
}
 else { 
    let points = (speed - 70)/5
        points = Math.floor(points);

if (points < 12) {
   console.log(`point: ${points}   license is valid`);
}
   else {
    console.log("License Suspended")
   }
}
