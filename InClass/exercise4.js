console.log("Start");
const result = new Promise((resolve, reject)=> {
    console.log(1);
    setTimeout(()=>reject("Woops!"),1000);
    console.log(2);
}).then(res=>res).catch(err=>{
    console.log("In catch");
    return err;
});
console.log(result);
console.log("End");

/*
Start
1
2
undefined
End
*/