const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student-controller');

router.post('/:stdId/courses',studentController.saveCourseByStudentId);
router.get('/:stdId/getAverage',studentController.getAverage)


module.exports = router;