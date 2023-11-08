let i = 0;
setTimeout(() => console.log(i), 100); //async code so will print thirdly with 100000000
// assume that the time to execute this function is >100ms
console.log(i); //sync code so will print first with 0
for(let j = 0; j < 100000000; j++) {
  i++;
}
console.log(i);//sync code so will print secondly with 100000000