'use strict';

export default class FacultyController {
  constructor(faculty) {
    'ngInject';

    let vm = this;
    vm.faculties = [];

    faculty.getRecords().then(function (faculties) {
      vm.faculties = faculties;
    });

  }

  facultiesIsNotEmpty() {
    return this.faculties.length > 0;
  }
};
