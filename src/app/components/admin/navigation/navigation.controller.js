'use strict';

export default class NavigationController {
  constructor() {
    'ngInject';

    let vm = this;
    vm.sections = [
      'Faculties',
      'Specialities',
      'Groups',
      'Subjects',
      'Tests',
      'Test Details',
      'Time Tables',
      'Questions',
      'Answers',
      'Students',
      'Users',
      'Logs',
      'Results'
    ];
  }
}
