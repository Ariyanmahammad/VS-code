function sayMyName(){
console.log("a");
console.log("r");
console.log("i");
console.log("y");
console.log("a");
console.log("n");
}

//sayMyName()

function addTwoNumbers(number1,number2){
       console.log(number1+number2);
}
//addTwoNumbers()//NaN
//addTwoNumbers(3,4)
const three3=addTwoNumbers(5,3)

function addTwoNumbers(number1,number2){
    // let results=(number1+number2);
    // return results;
    return number1+number2
}
const results=addTwoNumbers(5,3)
//console.log("results: ",results);
function logInuserMessage(username) {
    if (username===undefined) {  // u can write (!username)
        console.log("plz enter a user name");
        return;
        
    }

    return `${username} jsut logged in`
    
}
console.log(logInuserMessage("a"));//if u dont write any name just()then undefined
//undefined ko js me false assume krliya jata hai






