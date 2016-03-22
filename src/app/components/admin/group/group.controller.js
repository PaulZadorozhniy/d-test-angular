'use strict';

export default class GroupController {
  constructor(group) {
    'ngInject';

    let vm = this;
    vm.groups = [];

    group.getRecords().then(function (groups) {
      vm.groups = groups;
    });

  }


  createGroup() {

  }
}
