function inchToFeet(inch){
    const feet = parseInt(inch / 12);
    const inches = inch % 12;
    const result = feet + " feet " + inches + " inches"
    return result;
}
const height = inchToFeet(75);
console.log(height);
// console.log(inchToFeet(80).toFixed(2));
