// document.write("name: <br>");
// document.write("roll: <br>");
// document.write("number: <br>");

// conversion of string to number

//      var a = "10.36";
//     a = parseInt(a);
//     console.log(typeof(a));

//string length
// var text = "hello";
// len = text.length;
// console.log(len);

//take input from user
// Take string input from the user

var num1 = parseInt(prompt("enter number 1"));
var num2 = parseInt(prompt("enter number 2"));
var opertor = prompt("enter operator");
if (opertor == "+") {
    console.log(num1 + num2);
}else if (opertor == "-") {
    console.log((num1) - t(num2));}
else if (opertor == "*") {
     console.log((num1) * (num2));}
else if (opertor == "/") {
     console.log((num1) / (num2));}
else{ 
     console.log("invalid operator");}