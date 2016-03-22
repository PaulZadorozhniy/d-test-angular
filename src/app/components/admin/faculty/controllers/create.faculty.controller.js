'use strict';

export default class CreateFacultyController {
  constructor($state, statesService) {
    'ngInject';

    this.$state = $state;
    this.statesService = statesService;
  }

  cancel() {
    this.$state.go(this.statesService.Faculties.index)
  }
}
