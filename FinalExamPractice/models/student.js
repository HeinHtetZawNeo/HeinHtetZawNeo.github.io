let students = [{
    studentId: "610001",
    firstname: "John",
    lastname: "Smith",
    courses:
        [{
            courseId: "CS303",
            coursename: "Web Application Programming in JavaScript",
            semester: "2021-Spring",
            grade: 99
        },
        {
            courseId: "CS445",
            coursename: "Modern Asynchronous Programming",
            semester: "2021-Spring",
            grade: 95
        }]
},
{
    studentId: "610002",
    firstname: "Edward",
    lastname: "Jack",
    courses:
        [{
            courseId: "CS472",
            coursename: "Web Application Programming",
            semester: "2021-Spring",
            grade: 82
        },
        {
            courseId: "CS544",
            coursename: "Web Application Architecture",
            semester: "2021-Spring",
            grade: 88
        }]
}];

module.exports = class Student {
    constructor() { }

    static saveCourseByStudentId(stdId, course) {
        let std = students.find(s => s.studentId == stdId);
        if (!std)
            throw new Error("Student doesn't exist with ID: " + stdId);

        let existingCourse = std.courses.find(c => c.courseId = course.courseId);
        if (existingCourse) {
            existingCourse.coursename = course.coursename;
            existingCourse.semester = course.semester;
            existingCourse.grade = course.grade;
        } else
            std.courses.push(course);

        return std;
    }

    static getAverage(stdId, semester) {
        let std = students.find(s => s.studentId == stdId);
        if (!std) throw new Error("Student doesn't exist with ID: " + stdId);

        if (semester) {
            let courses = std.courses.filter(c => c.semester == semester);
            if (courses.length == 0) throw new Error("couldn’t find semester " + semester);

            return { average: courses.reduce((prev, cur, index, array) => prev + (cur.grade / array.length), 0) };
        }

        return { average: std.courses.reduce((prv, cur, index, array) => prv + (cur.grade / array.length), 0) };
    }
}