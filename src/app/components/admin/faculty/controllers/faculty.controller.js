'use strict';

export default class FacultyController {
  constructor(faculty, $state, statesService) {
    'ngInject';

    let vm = this;

    vm.statesService = statesService;
    vm.$state = $state;
    vm.faculties = [];

    faculty.getRecords().then(function (faculties) {
      vm.faculties = faculties;
    });

  }

  facultiesIsNotEmpty() {
    return this.faculties.length > 0;
  }

  createFaculty() {
    this.$state.go(this.statesService.Faculties.create);
  }
}
