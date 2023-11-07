let x=1;
function foo(){
    //console.log(bar);
    let x=2;
    bar();
    function bar(m,n){
        console.log(x,i,m,n);
    }
    for(var i=5;i<7;i++){
        console.log(i);
    }
    bar(100);
    buz();
}
function buz(){
    console.log(x);
}
foo();