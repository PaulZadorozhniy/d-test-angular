'use strict';

import FacultyModule from './faculty';

import SpecialityService from './speciality/services/speciality.service.js';
import GroupService from './group/services/group.service.js';
import SubjectService from './subject/services/subject.service.js';
import TestService from './test/services/test.service.js';
import TestDetailService from './testDetail/services/testDetail.service.js';
import TimeTableService from './timeTable/services/timeTable.service.js';
import QuestionService from './question/services/question.service.js';
import AnswerService from './answer/services/answer.service.js';
import StudentService from './student/services/student.service.js';
import UserService from './user/services/user.service.js';
import LogService from './log/services/log.service.js';
import ResultService from './result/services/result.service.js';
import statesService from './navigation/services/states.service.js';
import navigationSectionsService from './navigation/services/navigation.service.js';

import AdminController from './admin.controller';
import GroupController from './group/controllers/group.controller.js';
import SpecialityController from './speciality/controllers/speciality.controller.js';

import adminRouter from './admin.route';
import userRouter from './user/user.route';
import questionRouter from './question/question.route';
import groupRouter from './group/group.route';
import specialityRouter from './speciality/speciality.router';

let AdminModule = angular.module('dTestAngular.admin', [
  FacultyModule
]);

let moduleName = AdminModule.name;

AdminModule
  .config(adminRouter)
  .config(userRouter)
  .config(questionRouter)
  .config(groupRouter)
  .config(specialityRouter)
  .constant('statesService', statesService)
  .service('speciality', SpecialityService)
  .service('group', GroupService)
  .service('subject', SubjectService)
  .service('test', TestService)
  .service('testDetail', TestDetailService)
  .service('timeTable', TimeTableService)
  .service('question', QuestionService)
  .service('answer', AnswerService)
  .service('student', StudentService)
  .service('user', UserService)
  .service('log', LogService)
  .service('result', ResultService)
  .constant('navigationSectionsService', navigationSectionsService)
  .controller('AdminController', AdminController)
  .controller('GroupController', GroupController)
  .controller('SpecialityController', SpecialityController);


// By Convention
export default moduleName;
