let exerciseOne = (...input) => input.filter(ele=>ele>20).reduce((accumulator,currentVal)=>accumulator+currentVal,0);
let getNewArray = (strArray)=>strArray.filter(ele=>ele.length >=5).filter(ele=>ele.includes('a'));
let exerciseThree = (arg1,arg2,arg3)=>[...arg1,...arg2,...arg3];



console.log(exerciseOne(2, 3, 4, 5, 3));

let strAry = ["Hello","String 1","abcdefg","baccdefg"];
console.log(getNewArray(strAry));
console.log(exerciseThree('hi', [1,2,3], ['Hello','world']));


let attr = [1,2,3,4,5,6];
let value = [1,2,3,4,5,6];
attr.map((ele,index)=>result[ele] = value[index]);
console.log(result);
