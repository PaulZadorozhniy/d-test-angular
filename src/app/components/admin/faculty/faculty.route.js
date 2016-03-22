'use strict';

export default function facultyRouter($stateProvider) {
  'ngInject';

  $stateProvider
    .state('admin.faculty',{
      url: '/faculty',
      templateUrl: 'app/components/admin/faculty/faculty.template.html',
      controller: 'FacultyController',
      controllerAs: 'vm'
    })
    .state('admin.faculty.view', {
      url: '/view',
      controller: 'FacultyViewController',
      controllerAs: 'vm'
    })
    .state('admin.faculty.create', {
      url: '/create',
      controller: 'FacultyCreateController',
      controllerAs: 'vm'
    })
    .state('admin.faculty.edit', {
      url: '/edit',
      controller: 'FacultyEditController',
      controllerAs: 'vm'
    });
}
