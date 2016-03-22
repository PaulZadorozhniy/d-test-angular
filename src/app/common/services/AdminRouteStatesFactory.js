'use strict';

export default function AdminRouteStatesFactory(entityName) {
  return function ($stateProvider) {
    'ngInject';

    let entityFirstLetter = entityName[0];
    let normalizedNameInLower = entityFirstLetter.toLowerCase().concat(entityName.slice(1));
    let normalizedNameInUpper = entityFirstLetter.toUpperCase().concat(entityName.slice(1));

    let basePath = `app/components/admin/${normalizedNameInLower}`;

    $stateProvider
      .state(`admin.${normalizedNameInLower}`,{
        url: `/${normalizedNameInLower}`,
        templateUrl: `${basePath}/templates/${normalizedNameInLower}.template.html`,
        controller: `${normalizedNameInUpper}Controller`,
        controllerAs: 'vm'
      })
      .state(`admin.${normalizedNameInLower}.create`, {
        url: '/create',
        templateUrl: `${basePath}/templates/create.${normalizedNameInLower}.template.html`,
        controller: `Create${normalizedNameInUpper}Controller`,
        controllerAs: 'vm',
        onEnter: function($mdDialog) {
          $mdDialog.show({
            controller: `Create${normalizedNameInUpper}Controller`,
            controllerAs: 'vm',
            templateUrl: `${basePath}/templates/create.${normalizedNameInLower}.template.html`,
            clickOutsideToClose: false
          });
        }
      })
      .state(`admin.${normalizedNameInLower}.edit`, {
        url: '/edit',
        templateUrl: `${basePath}//templates/edit.${normalizedNameInLower}.template.html`,
        controller: `Edit${normalizedNameInUpper}Controller`,
        controllerAs: 'vm'
      });
  };
}
