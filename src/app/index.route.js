export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    //.state('home', {
    //  url: '/',
    //  templateUrl: 'app/main/main.html',
    //  controller: 'MainController',
    //  controllerAs: 'vm'
    //})

  $urlRouterProvider.otherwise('/admin');
}
