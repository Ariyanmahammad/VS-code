for (let array = 0; array < array.length; array++) {
    const element = array[array];
    
}

function one() {
    const username="Ariyan"

    function two() {
        const website="ariyanamahammadportfolio.netlify.app"
        console.log(username);
        
    }
    //console.log(website); // website andar tha so error

    two();
    
}
one()

if (true) {
    const username="ariyan"

    if (username=="ariyan") {
        const website =" yt"
        console.log(username+website);
        
    }
    //console.log(website); scope ke bahar nhi chalega website

    
}
//console.log(username); scope ke bahar not acceseable

//************************* */
console.log(addOne(5));
function addOne(num) {
    return num+1
    
}


//function aisebhi bante dikh sakta hai

//console.log(addtwo(5));//u cant access before declaration
const addtwo=function (num) {
    return num+2
    
}

//hoisting ^^^^^^^^^^^
