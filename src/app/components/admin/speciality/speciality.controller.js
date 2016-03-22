'use strict';

export default class SpecialityController {
  constructor(speciality) {
    'ngInject';

    let vm = this;
    vm.specialities = [];

    speciality.getRecords().then(function (specialities) {
      vm.specialities = specialities;
    });

  }

  createSpeciality() {

  }
}
