//shopping card
function calculateCartPrice(num1) {
    return num1;
    
}
//console.log(calculateCartPrice(200,300,400));//200
//use rest operator 
function calculateCartPrice(...num2) {
    return num2;
    
}
console.log(calculateCartPrice(200,800,567,600));

function cart(val1 , val2 , ...num3) {//spread ...

    return num3;
    
}

console.log(cart(45,67,89,99));

const user ={
    username:"ariyan",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

    
}
handleObject(user)
handleObject({
    username:"sam",
    price: 399
})
const myArray=[2,3,4,5,6,7,8,9]
function arrayPrint(getArray) {

    return getArray[7]
    
}
console.log(arrayPrint(myArray));

console.log(arrayPrint([2,3,4,5,6,7,8,910]));

