

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let i =81;
let sum = 0;
while(i <=131){
    if(i %2 ===1){
        console.log("Next number is: ",i,"\nnow add this number :",i);
        sum = sum+i;
        console.log("Total sum is: ", sum);
    }
    i++;
}