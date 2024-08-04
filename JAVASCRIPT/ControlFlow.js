//if--else
if (true) { // if false then not enter in scope

    
}

//const isUserloggedIn=true;
// if () {

// }

if (2=="2") { // strict chekcing===
    //console.log("executed");
    
}

if (2!=3) {
    //console.log("a");
    
}



//const temp=60
// if (temp<50) {
//     console.log("temp is less than than 50");
    
// }
// else{
//     console.log("greter than 50");
// }

const score =200
if (score>100) {
    const power="fly"
    //console.log(`user power: ${power}`);
    
}

//var use kete to bahar bhi power ko access akiya ja sakta hai thats why we should not use var

const balance=999

if (balance>1000) console.log("yes"), console.log("TEST");

//not a good practice ^^^^^^^^ ","

// Nesting

if (balance>5000) {
    console.log("less than");
    
}else if (balance>1000) {
    console.log("yes");
    
}
else{
    //console.log("noo");
}

//real life usage

const isUserloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const isLoggedInfromEmail=true
if (isUserloggedIn&&debitCard&&2===2) { // ek bhi false hogya then code will not run
    //console.log("allowed");
    
}
 if (loggedInFromGoogle|| isLoggedInfromEmail) {
    //console.log("user loggedin");
 }

//switch case
 const month=3;

 switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("f");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("a");
        break;
    case 5:
        console.log("my");
        break;
    case 6:
        console.log("j");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("aug");
        break;
    case 9:
        console.log("sep");
        break;
    case 10:
        console.log("oct");
        break;
    case 11:
        console.log("nov");
        break;
    case 12:
        console.log("dec");
        break;
 
    default: 
    console.log("invalid");
        break;
 }

 //truthy falsy value

 const userEmail="h@gmail.com"

 if (userEmail) { // truthy statement || if empty " " then falsy
    //console.log("got user email");
    
 }
 else{
    console.log("don't have user email");
 }

 //false is a falsy value , 0/-0 is also a falsy value

 //BigInt 0n is also a falsy value ,"", null , undefined , NaN
 //surprising truthy value

 //^^^^^^^^^
//"0", 'false', " ", [],{},function(){}->> empty function is also a truthy value, 
 const useremail=[]
if (useremail.length===0) {
    //console.log("yes it is");
    
}

const emptyObject={}
 if (Object.keys(emptyObject).length==0) {
    console.log('obj is empty');
    
 }

 //false==0
 //false==""
 //0==""  dhyan rakhna for interview

 /* Nullish coalescing operator (??): Null undefined

  */

let val1;
val1=5??10
//console.log(val1); //5

val1=null??10
//console.log(val1);
val1=undefined??20
//console.log(val1);

val1=null??98??8
//console.log(val1);

//ternary operator
//conditiom?true:false

const price=90

price>=100?console.log("ys"):console.log("no");




 