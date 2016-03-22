'use strict';

export default class AdminController {
  constructor(navigationSectionsService, statesService) {
    'ngInject';

    let vm = this;

    vm.states = statesService;
    vm.sections = navigationSectionsService;
  }
}
