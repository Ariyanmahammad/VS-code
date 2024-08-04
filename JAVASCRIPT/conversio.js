let score=33
console.log(typeof score);
console.log(typeof (score));
let score1="33"
console.log(typeof score1);
let valueInNumber=Number(score1)
console.log(typeof valueInNumber)
let score2="234abcdhjk"
let valueinnumber=Number(score2)
console.log(typeof score2);
console.log(valueinnumber);
//NaN special type
//null ko number me 0 bana eta hai
//undefined me bhi NaN
//boolean value changes in 1 if true 0 if false
//string changes in NaN

//"33"->Number()->33
//"33abd"->nan

let IsLoggedIn=1;
let booleanisloggedin=Boolean(IsLoggedIn)
console.log(booleanisloggedin);

//boolean me conversion string->true , 0->false, ()/""->empty string ->false

let no=32
let changeinstring =String(no)
console.log(changeinstring);
console.log(typeof changeinstring);
