/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import AdminModule from './components/admin/admin.module';

angular.module('dTestAngular', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ui.router',
  'ngMaterial',
  'toastr',
  AdminModule
])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('apiHost', 'http://ec2-54-69-82-91.us-west-2.compute.amazonaws.com/')
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
