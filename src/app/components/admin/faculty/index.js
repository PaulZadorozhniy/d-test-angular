'use strict';

// Controllers
import FacultyController from './controllers/faculty.controller';
import CreateFacultyController from './controllers/create.faculty.controller';

// Services
import FacultyService from './services/faculty.service';

// Router
import facultyRouter from './faculty.route';

let module = angular.module('dTestAngular.admin.faculty', []);
let moduleName = module.name;

module
  .config(facultyRouter)
  .service('faculty', FacultyService)
  .controller('FacultyController', FacultyController)
  .controller('CreateFacultyController', CreateFacultyController);

// By convention
export default moduleName;

