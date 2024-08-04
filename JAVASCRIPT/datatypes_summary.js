/*datatypes: 1) primitive 2) non-primitive
1) 7 types are there
a)string 
b)number
c)boolean
d)null ... empty
e)undefined
f)symbol
g)BigInt
2) non primitive: reference type datatype:
a)array
b)objects
c)functions

java script is a : dynamically typed lang
cousin bhai: typescript

*/
//symbols: in react

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);
//array
const heroes=["spiderman","iron man"]

//objects
let myobj
{
    name: "ariyan"
    age: 22

}

//function

const myfunction=function(){
    console.log("ariyan");
}

console.log(typeof heroes)

