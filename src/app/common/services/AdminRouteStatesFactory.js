'use strict';

export default function AdminRouteStatesFactory(entityName) {
  return function ($stateProvider) {
    'ngInject';

    let entityFirstLetter = entityName[0];
    let normalizedNameInLower = entityFirstLetter.toLowerCase().concat(entityName.slice(1));
    let normalizedNameInUpper = entityFirstLetter.toUpperCase().concat(entityName.slice(1));

    $stateProvider
      .state(`admin.${normalizedNameInLower}`,{
        url: `/${normalizedNameInLower}`,
        templateUrl: `app/components/admin/${normalizedNameInLower}/${normalizedNameInLower}.template.html`,
        controller: `${normalizedNameInUpper}Controller`,
        controllerAs: 'vm'
      })
      .state(`admin.${normalizedNameInLower}.view`, {
        url: '/view',
        controller: `${normalizedNameInUpper}ViewController`,
        controllerAs: 'vm'
      })
      .state(`admin.${normalizedNameInLower}.create`, {
        url: '/create',
        controller: `${normalizedNameInUpper}CreateController`,
        controllerAs: 'vm'
      })
      .state(`admin.${normalizedNameInLower}.edit`, {
        url: '/edit',
        controller: `${normalizedNameInUpper}EditController`,
        controllerAs: 'vm'
      });
  };
}
