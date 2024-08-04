//dates

let myDate= new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let mycreatedDate= new Date(2023,11,23,5,3)//month 0 se start hota hai
console.log(mycreatedDate.toLocaleString());

let cretadDate= new Date("01-14-2024")
console.log(cretadDate.toLocaleString());

let MyTimeStamp= Date.now()
console.log(MyTimeStamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //in seconds

let newDate= new Date()
console.log(newDate.getMonth());//6 as started from 0

newDate.toLocaleString('default',{
    weekday:"narrow"  
})



// in vs code ctrl+ space will give u suggestions
