const Student = require('../models/student');

exports.saveCourseByStudentId = (req,res)=>{
    res.json(Student.saveCourseByStudentId(req.params.stdId,req.body));
}

exports.getAverage = (req,res)=>{
    res.json(Student.getAverage(req.params.stdId,req.query.semester));
}