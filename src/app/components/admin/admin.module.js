'use strict';

import { FacultyService } from './faculty/faculty.service';

angular.module('dTestAngular.admin', [])
  .service('faculty', FacultyService);