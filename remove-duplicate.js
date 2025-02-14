
function  duplicateCheck(arr){
    const unique = [];
    for (const element of arr) {
        if (unique.includes(element)=== false ){
            unique.push(element);
        }
    }
    return unique;
}
const array = ['a','b', 'c' ,'d' ,'b', 'c' ,'d','e'];
console.log(duplicateCheck(array));
