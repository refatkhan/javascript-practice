const numbers = [1,2,3,4,5,6]
// reverse using reverse function
// numbers.reverse();
// console.log(numbers);

// reverse using unshift ar array

const rev_num = []
for (const rev_nums of numbers){
    rev_num.unshift(rev_nums);
    
}
console.log(rev_num);
