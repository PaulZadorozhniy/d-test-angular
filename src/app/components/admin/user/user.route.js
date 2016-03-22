'use strict';

export default function userRouter($stateProvider) {
  'ngInject';

  $stateProvider
    .state('admin.user',{
      url: '/user',
      templateUrl: 'app/components/admin/faculty/faculty.template.html',
      controller: 'FacultyController',
      controllerAs: 'vm'
    })
    .state('admin.user.view', {
      url: '/view',
      controller: 'FacultyViewController',
      controllerAs: 'vm'
    })
    .state('admin.user.create', {
      url: '/create',
      controller: 'FacultyCreateController',
      controllerAs: 'vm'
    })
    .state('admin.user.edit', {
      url: '/edit',
      controller: 'FacultyEditController',
      controllerAs: 'vm'
    });
}
