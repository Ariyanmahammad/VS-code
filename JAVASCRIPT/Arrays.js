const myArray=[0,1,2,3,4,5,6]  // sq. brackets , ()->brackets , {}->curly brackets
// u can write strings , boolean in array
//u can resize js array
console.log(myArray[4])//4
const myHeroes=["cap america","iron man","wakanda"]
//arrays ke andar prototype milta hai
console.log(myHeroes[2]);
//array methods 

myArray.push(7)
console.log(myArray)
myArray.push(8)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.unshift(9)//inserted at 1st place so we are shifted all elems
console.log(myArray)
myArray.shift()
console.log(myArray)
console.log(myArray.includes(9));
console.log(myArray.indexOf(9))
console.log(myArray.indexOf(6))

const newArray=myArray.join()
console.log(myArray)
console.log(newArray)
console.log(typeof newArray)



//console.log(myArray)
//slice & splice
console.log("A ",myArray);

const myn1=myArray.slice(1,3)
console.log(myn1);
console.log("B ",myArray);

const myn2=myArray.splice(1,3)
console.log(myn2);
console.log("C ",myArray)

//diff b/w slice and splice 
// splice manipulate original array on thr other hand slice doese not manipulate original array
//in splice original array comes out as output 
//in splice range out in output

