'use strict';

export default class StudentController {
  constructor(student) {
    'ngInject';

    let vm = this;
    vm.model = {};
    vm.model.students = [];

    student.getListRange(25, 0).then(function (students) {

      vm.model.students = students;
    });

  }

  createStudent() {

  }
}
