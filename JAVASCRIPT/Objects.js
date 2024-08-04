//singleton

//object literals
//object.create -> aise bhi ho sakta hai , as a constructor

const sym=Symbol("key1")
const jsUser={
    "full name": "sk ariyan mahammad",
    [sym]: "mykey1",
    name: "Ariyan",
    age :20,
    email: "ariyan@amazon.com",
    isLoggedIn:false,
    lastLoggedIn:["mon","sat"]

}

console.log(jsUser.isLoggedIn);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);//imp
//console.log(jsUser.sym);
//console.log(typeof jsUser.sym);//string
console.log(jsUser[sym]);


jsUser.email="ariyan@google.com"
console.log(jsUser["email"]);
//Object.freeze(jsUser)
jsUser.age=22//not implemented as it is 20 already given and freezed
console.log(jsUser);

jsUser.greeting=function(){
    console.log("welcome");
}
console.log(jsUser.greeting);//un defined
console.log(jsUser.greeting())

jsUser.greeting2=function(){
    console.log(`u r welcome , ${this.name}`);
}
console.log(jsUser.greeting2());

//jab bhi aaapa value ko access karenge aap . operator se access krna but []isse karna sahi rhega
//so be careful








