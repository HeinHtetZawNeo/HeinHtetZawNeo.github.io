let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        });
    }
};
group.showList();

//Option 1 - Wrapper
console.log("Option 1 Wrapper");
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(()=>function (student) {
            console.log(this.title + ": " + student);
        });
    }
};
group1.showList();