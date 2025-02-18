function  electionResult( votes ) {
    let count1 =0;
    let count2=0;
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    for (const element of votes) {
        if(element == "mango"){
            count1 = count1 + 1;
        }
        else if(element == "banana"){
            count2 = count2 + 1;
        }
    }
    if(count1 > count2){
        return "Mango";
    }else if(count1 < count2){
        return "Banana"
    }else{
        return "Draw";
    }
    
}
const check = ["mango", "banana", "mango", "banana", "mango"];
const result = electionResult(check);
console.log(result);
