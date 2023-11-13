var a = 2; 
let b = 3; 
function outer() { 
    let c = 5; 
    var d = 7; 
    return function inner() { 
        b = 8; 
        let c = 9; 
        console.log(a); //2 
        console.log(b); //8 
        console.log(c); //9 
        console.log(d); //7 
    } 
} 
outer()();