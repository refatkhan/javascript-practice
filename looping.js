/**
 * For Loop
 * While loop
 * do-while loop
 * for of ------------->array loop korar jonno
 * for in -----------> object 
 * 
 */

const friends = ["elon",'bill','mark']
for(const friend of friends){
    // console.log(friend);
}
for (let i = 0; i<friends.length; i++){
    // console.log(i);
    console.log("Number of index: "+ i + " value is -----> " + friends[i]);
}