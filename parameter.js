function evenStrCheck(str) {
  if (str.length % 2 === 0) {
    console.log(`The string ${str} is even`);
  } else {
    console.log(`The string ${str} is odd`);
  }
}
// evenStrCheck("Dhaka"); 

// create a function that will return only even numbers

function evenNumbersOnly(numbers){
    const evenArray = [];
for (const number  of numbers) {
       if(number %2 === 0){
        console.log(number);
        evenArray.push(number);
       }
       
    }
    return evenArray;
}
const numbers =[5,6,9,8,32,5];
const evens = evenNumbersOnly(numbers);
console.log(evens);
