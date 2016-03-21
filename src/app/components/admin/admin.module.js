'use strict';

import { FacultyService } from './faculty/faculty.service';
import { SpecialityService } from './speciality/speciality.service';

angular.module('dTestAngular.admin', [])
  .service('faculty', FacultyService)
  .service('speciality', SpecialityService);
