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

// var num1 = (prompt("enter number 1"));
// var num2 = parseInt(prompt("enter number 2"));
// var opertor = prompt("enter operator");
// if (opertor == "+") {
//      console.log(num1 + num2);
// } else if (opertor == "-") {
//      console.log((num1) - t(num2));
// }
// else if (opertor == "*") {
//      console.log((num1) * (num2));
// }
// else if (opertor == "/") {
//      console.log((num1) / (num2));
// }
// else {
//      console.log("invalid operator");
// }

//loop 
// for (var i = 0; i<=10; i++){
//      console.log("hello nais" + i);
// }
// var i = 1;
// while (i <= 10) {
//      document.write("hello nais: " + i + "<br>");
//      i++;
// }
// document.write("hello successfull");
//tenerary operator
// var number = Number(prompt("enter number"));
// var result = number>0? "positive":number<0?"negative" : "zero";
// document.write(result);

//basic function
// function result(num1, num2){
//     var result1 = num1 + num2;
//    return result1;

// }
// console.log("Result is : "+result(5,9));
// var a = result(5,9);
// console.log("this is a boom: "+ a);


//iife function
(function add(num1, num2){
    var result = num1*num2;
    console.log("The multipication: "+result);
})(5,6);

var nias = function add(num1,num2){
    var result1 = num1+num2;
    console.log("the addition of two numbers: "+result1);
};
nias(4,5);