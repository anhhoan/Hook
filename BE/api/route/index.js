module.exports = function (app) {
    const StudentList = require('../controller/index')
    app.route('/student')
        .get(StudentList.getStudent)
        .post(StudentList.addStudent)
    app.route('/student/:id')
        .delete(StudentList.deleteStudent)
        .put(StudentList.updateStudent)
    app.route('/student/pagination')
        .get(StudentList.paginateStudent)
    app.route('/search')
        .get(StudentList.searchStudent)
    app.route('/deleteSoft/:id')
        .delete(StudentList.deleteSoft)
}













