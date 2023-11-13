const obj = {
    message : 'Hello World!',
    logMessage:()=>{
        console.log(this.message);
    }
};
/*setTimeout(obj.logMessage.bind(obj),1000);
setTimeout(function(){
    obj.logMessage.call(obj)
},1000);
setTimeout(function(){
    obj.logMessage.apply(obj)
},1000); */

//from method call side
//setTimeout(()=>obj.logMessage.call(obj),1000);
//setTimeout(()=>obj.logMessage.apply(obj),1000);
setTimeout(obj.logMessage,1000);