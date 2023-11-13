class Student {
    constructor(stdId) {
        this.studentId = stdId;
        this.answers = [];
    }
    addAnswer(question) {
        if (question instanceof Question) {
            this.answers.push(question);
        }
    }

}
class Question {
    constructor(qid, ans) {
        this.qid = qid;
        this.answer = ans;
    }
    checkAnswer(answer) {
        if (this.answer === answer) return true;
        return false;
    }
}
class Quiz {
    constructor(questions, students) {
        this.questions = new Map();
        questions.forEach(ele => {
            this.questions.set(ele.qid, ele);
        });
        this.students = students;
    }
    scoreStudentBySid(Sid) {
        let std = this.students.filter(ele => ele.studentId === Sid).reduce((acc, std) => std, {});

        if (std) {
            return std.answers.map(ele => {
                let ques = this.questions.get(ele.qid);
                return ques.checkAnswer(ele.answer);
            }).reduce((occ, ans) => {
                if (ans) return occ + 1;
                return occ;
            }, 0);
        }
    }
    getAverageScore() {
        return this.students.map(ele => this.scoreStudentBySid(ele.studentId)).reduce((occ, points) => occ + points / this.students.length, 0);
    }

}


const student1 = new Student(10);

student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];

const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
