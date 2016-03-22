'use strict';

export default function AdminRouter($stateProvider) {
  'ngInject';

  $stateProvider
    .state('admin',{
      url: '/admin',
      templateUrl: 'app/components/admin/admin.template.html',
      controller: 'AdminController',
      controllerAs: 'vm'
  })
}
