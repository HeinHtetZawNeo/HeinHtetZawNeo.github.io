let studentList = [{ 
    "studentId": "610001", 
    "firstname": "John", 
    "lastname": "Smith", 
    "courses": [{ 
        "courseId": "CS303", 
        "coursename": "Web Application Programming in JavaScript", 
        "semester": "2021-Spring", 
        "grade": 99 
    }, {
        "courseId": "CS445", 
        "coursename": "Modern Asynchronous Programming", 
        "semester": "2021-Spring", 
        "grade": 95 
    }] }, { 
        "studentId": "610002", 
        "firstname": "Edward", 
        "lastname": "Jack", 
        "courses": [{ 
            "courseId": "CS472", 
            "coursename": "Web Application Programming", 
            "semester": "2021-Spring", 
            "grade": 82 
        }, { 
            "courseId": "CS544", 
            "coursename": "Web Application Architecture", 
            "semester": "2021-Spring", 
            "grade": 88 
        }] 
    }];

module.exports = class Student{
    constructor(studentId,firstname,lastname,courses){
        this.studentId = studentId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.courses = courses;
    }

    static getAllCoursesByStdID(id){
        let std = studentList.find(std=>std.studentId==id);
        if(std)
            return std.courses;
        return {error:`Student doesn’t exist with ID: ${id}`};
    }
}