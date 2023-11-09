/*
2. Create a Student Constructor function:

Properties: firstName:String, lastName:String, grades:Array

methods:

inputNewGrade(newGrade): push newGrade to grades

computeAverage(): return average of the grades

After you finish, create some students using the constructor function.
*/

function Student(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}
Student.prototype.inputNewGrade=function(newGrade){
    this.grades.push(newGrade);
}
Student.prototype.computeAverage=function(){
    return this.grades.reduce((acc,cur,index,ary)=>acc+(cur/ary.length),0);
}

let std1 = new Student("Mr. A", "A");
std1.inputNewGrade(20);
std1.inputNewGrade(30);
std1.inputNewGrade(40);
console.log(std1.firstName,std1.lastName,std1.computeAverage());

let std2 = new Student("Mr. B", "B");
std2.inputNewGrade(40);
std2.inputNewGrade(60);
std2.inputNewGrade(50);

console.log(std2.firstName,std2.lastName,std2.computeAverage());