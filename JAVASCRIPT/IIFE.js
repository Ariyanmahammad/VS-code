
// immediatelyinvoked function expressions (IIFE)

function chai() {
    console.log(`DB connected`);
    
}
//chai()

//iife

(function chai2() {
    console.log(`DB connected`);
    
})(); // named iife

//IIFE: global scope ki pollution se problem hoti hai kahi bar
// uske pollution ko hatane keliye we use iife

(() => {
    console.log(`DB`);
}

)();//simple iife

//semicolon at IIFE imp




