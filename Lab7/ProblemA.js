/*let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        });
    }
};
group.showList();*/

//Option 1 - Bind
console.log("Option 1 Bind");
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this))
    }
};
group1.showList();

//Option 2 - arrow function
console.log("Option 2 arrow function");
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student);
        })
    }
};
group2.showList();

//Option 3 - call + wrapper
console.log("Option 3 call wrapper");
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((std) => {
            return function (student) {
                console.log(this.title + ": " + student);
            }.call(this,std);
    });
    }
};
group3.showList();

//Option 4 - apply + wrapper
console.log("Option 4 apply wrapper");
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((std) => {
            return function (student) {
                console.log(this.title + ": " + student);
            }.apply(this,[std]);
    });
    }
};
group4.showList();

//Option 5 - self
console.log("Option 5 apply wrapper");
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((std) => {
            let self = this;
            return function (student) {
                console.log(self.title + ": " + student);
            }.call(self,[std]);
    });
    }
};
group5.showList();