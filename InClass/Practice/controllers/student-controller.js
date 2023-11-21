const Student = require('../models/student');

exports.getAllCoursesByStdID = (req,res)=>{
    console.log(req.param);
    res.json(Student.getAllCoursesByStdID(req.params.id));

    const b = books.filter( b => b.authors.find(a=>a.lastname.toLowerCase() == lname.toLowerCase()))[0];
}