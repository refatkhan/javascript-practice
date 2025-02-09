

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let i = 81;
let sum = 0;
while(i <=131){
    if(i %2 ===1){
        sum = sum+i;
        console.log("Total sum is with previous: ", sum);
    }
    i++;
}
// console.log("Total sum is: ", sum);

// all even number 
console.log("start even sum");
let j = 206;
let evensum = 0;
while(j <=311){
    if(j %2 === 0){
        evensum = evensum+i;
        console.log("Total sum is with previous: ", evensum);
    }
    j++;
}