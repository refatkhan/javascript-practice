/*
// if (condition) {

}




*/
const price = parseFloat(prompt("Enter your total price: "));

if (!isNaN(price) && price >= 5000) {  // Ensure price is a valid number
    const discount = price * 10 / 100;
    const pay = price - discount;
    console.log("You have to pay: " + pay.toFixed(2)); // Format to 2 decimal places
} else if (!isNaN(price)) {
    console.log("You are not eligible");
} else {
    console.log("Invalid input. Please enter a valid number.");
}
