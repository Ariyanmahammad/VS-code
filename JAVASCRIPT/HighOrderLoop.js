//for of

["",""] //-> array -> string

[{},{},{}] // arrai=> object
//very interesting , no ++ /--
const arr=[1,2,3,4,5,6,7,8,9]
for (const num of arr) {
      // console.log(num);
    
}

const greetings="hello world"
 for (const i of greetings) {
    //console.log(i);// h e l l o ........
    //console.log(greetings);// hello world , helloo world ...........................

 }

 //maps

// const map= new Map()
//  //console.log(map.keys());
// map.set('IN ',"india")
// map.set('IN1',"india")
// map.set('IN2',"india")
// map.set('IN3',"india")
// map.set('IN4',"india")
// map.set('IN5',"india")
// map.set('IN6',"india")
// map.set('IN7',"india")
// map.set('IN8',"india")
// map.set('IN9',"india")
// map.set('IN0',"india")
//console.log(map); // duplicate on key nhi ho sakta , values only unique

// for (const key of map) {
//     //console.log(key); // everything will be print
    
// }
// for (const [key,value] of map) {
//     //console.log(key,value); // everything will be print
    
// }
 //obj in map not possible
const myObj={
    'game1':'NFS',
    'game2':'spiderMan'
}
//for (const [key,value] of myObj) {
    //console.log(key,value);  error
//}

const myObject={
    js:'javascript',
    cpp: 'c++',
    py:'python'
}

for (const key in myObject) {
   //console.log(key);
   //console.log(myObject[key]);
  // console.log(`${key} shortcut of ${myObject[key]}`);
}

const programming =["js","cpp","py","c","kotlin"]
for (const key in programming) {
    //console.log(key); //1 2 3 4 5 6 7 8 9 0
    //console.log(programming[key]);
}

const map= new Map()
 //console.log(map.keys());
map.set('IN ',"india")
map.set('IN1',"india")
map.set('IN2',"india")
map.set('IN3',"india")
map.set('IN4',"india")
map.set('IN5',"india")
map.set('IN6',"india")
map.set('IN7',"india")
map.set('IN8',"india")
map.set('IN9',"india")
map.set('IN0',"india")

for (const key in map) {
    //console.log(key); // nothing came in output as map is not iterable
    
}

//most usable loop


const coding =["java","javScript","c++","c"]
coding.forEach(function (val){
    //console.log(val);

})//callBackFn -> name nhi hota iska bss (item) likhna then {kaam krna curly ke andar}

coding.forEach((item)=>{
    //console.log(item);
})


function printme(item) {
    //console.log(item);
    
}
coding.forEach(printme)


coding.forEach((item , index , arr)=> {
    //console.log(item,index,arr);
})

const myCoding=[
    {
        languageName: "js",
        file:"loop"
    },
    {
        languageName: "jr",
        file:"loo"
    },
    {
        languageName: "ju",
        file:"lp"
    },
    {
        languageName: "jj",
        file:"lop"
    },
    {
        languageName: "jh",
        file:"oop"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})






