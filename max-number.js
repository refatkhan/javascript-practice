
// function getMax(jim , mim , dim){
//     if(jim > mim && jim > dim){
//         console.log("jim is bigger");
//     }else if(mim > jim && mim > dim){
//         console.log("mim is bigger");
//     }else{
//         console.log("dim is bigger");
//     }
// }
// const big = getMax(45,69,36);
// function biggerNumber(max){
//     console.log("Max number is",max);
//     return 0;
// }
// const num = biggerNumber(Math.max(12,69,3,6,58,96,36,78))
// console.log(num);

const heights = [65,69,36,98,75,12,5,8];
function getMax(numbers){
    let max = numbers[0];
    for (const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log("highest height is: ",max);