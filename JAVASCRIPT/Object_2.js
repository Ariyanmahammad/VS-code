const tinderUser=new Object()//singleton object
const tinderUser1={}//not a singleton object
console.log(tinderUser);
console.log(tinderUser1);

//output will be same but diff in singleton & non-singleton
//singleton obj:
//A singleton object in JavaScript is a design pattern that restricts the instantiation of a class to a single instance. This is useful when exactly one object is needed to coordinate actions across the system.

//diff betw sing...&non singl..
// chatgpt

tinderUser.id="123abc"
tinderUser.name="bravo"
tinderUser.isLoggedIn=false
//console.log(tinderUser);

const regulerUser={
    email: "am@googlr.com",
    fullName: {
        userName:{
            firstName:"ariyan",
            lastName:"md"
        }
    }
}

//console.log(regulerUser.fullName.userName.lastName);


//merging two class
const object1={1: "a",2:"b"}
const object2={3:"c",4:"d"}
const object3={object1,object2}
//console.log(object3);//just like array
const object4=Object.assign({},object1,object2)
console.log(object4);
//spread

const obj3={...object1,...object2}
console.log(obj3);

const users=[{
    a:"........"

},
{
  b:"........"
},
{
c:"........"
}
]

console.log(Object.keys(tinderUser));

console.log(users);

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true



