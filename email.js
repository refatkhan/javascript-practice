function validEmail( email ) {
    if(typeof email !== "string"){
        return "Invalid";
    }

    if (email.includes(" ") || !email.includes("@") || email.slice(-4) !== (".com") || email[0] == "-" || email[0] == "." || email[0] == "_" || email[0] == "+" || email[0] == "@"){
        return false;
    }else{
        return true;
    }
}
const check = validEmail("he ro@alom.com");
console.log(check);
