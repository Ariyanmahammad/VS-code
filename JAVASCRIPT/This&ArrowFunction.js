const user={
    usrename: "hitesh",
    price : 999,

    welcomeMessage: function () {
       // console.log(`${this.usrename},welcome to website`);
       // console.log(this);
        
    }


}
user.welcomeMessage()
user.usrename="Ariyan"
user.welcomeMessage()
//console.log(this); //{}
//function chai() {
    let username="hitesh"
    //console.log(this);
    //console.log(this.username);
    
//}
//chai()

const chai = function () {

    let username="a"
    console.log(this.username);
    
}
//chai()

//arrow: function

const chai2=()=>{
    let username="b"
    //console.log(this.username);
    console.log(this);//{}

}
//chai2()


//arrow function discussion

//syntax

const addTwo=(num1 , num2)=> {
    return num1+num2
}
//console.log(addTwo(3,4));


//implicit return

const addTwo2=(num1 , num2)=>  (num1+num2)

console.log(addTwo2(4,7));

// if u use curly brackets then u have to use return 
// if u dont use { } and use ( ) or simple num1+num2 then dont use{}

//if u havce to return object then undefined come

const classObjectReturn =()=> ({username:"ariyan"})
console.log(classObjectReturn())
// wrapp object { } with ()

const myarray=[2,3,4,5,6,78,8];
//myarray.forEach(()=>())