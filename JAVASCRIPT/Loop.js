//iteration/iterator

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        //console.log("5 is best");
        
    }
    //console.log(element);
}

for (let i = 0; i < 2; i++) {
    //console.log(`outer loop : ${i}`);
    for (let j = 0; j < 2; j++) {
       //console.log(`inner loop value: ${i} & ${j}`);
        
    }
    
}



let Myarray=["cap america","iron man","batman"]
for (let i = 0; i < Myarray.length; i++) {
    const element = Myarray[i];
    //console.log(element);
    
}
//console.log(Myarray.length);

//keywords

//break:  

for (let i = 1; i <=20; i++) {
    
    if (i==5) {
        //console.log(`detected 5`);
        break
        
    }
    //console.log(`value of i is ${i}`);
    
}

//continue

for (let i = 1; i <=20; i++) {
    
    if (i==5) {
        //console.log(`detected 5`);
        continue
        
    }
    //console.log(`value of i is ${i}`);

}

let a=1;
while (a<=10) {
    //console.log("print");
    a++;
    
}

let i=0
while (i<=10) {
    //console.log(`index is : ${i}`);
    i+=2

}

let yourarray=["cap america","iron man","batman"]
let arr=0
while (arr<yourarray.length) {
   // console.log(`value is : ${yourarray[arr]}`);
    arr=arr+1    
}

//do while loop


let score=11// do while loop me kaaam pehle then condition 

do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);







