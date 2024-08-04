//scopes
// let a =10
// const b=20
// var c=30
// console.log(a)
// console.log(b);
// console.log(c);
// scopes is curly braces 
{


}

var c=300 // bahar jo bhi likhte h sab global scope

if (true) { // block scope jo bhi likhega if ke andar
let a =10
const b=20
var c=30
    
}
//console.log(a)
//console.log(b);
console.log(c);// bahar nhi ani chahye thi c
//thats why people avoid var
 let d=9;
 if (true) {
    let d=20
    const e=90;
    console.log("inner: ",d); //block scope
    
 }
 console.log(d); //global scope

 for (let a = 0; a < array.length; a++) {
    const element = array[a];
    
 }


