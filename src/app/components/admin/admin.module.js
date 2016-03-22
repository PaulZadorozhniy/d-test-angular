'use strict';

import FacultyService from './faculty/faculty.service';
import SpecialityService from './speciality/speciality.service';
import GroupService from './group/group.service';
import SubjectService from './subject/subject.service';
import TestService from './test/test.service';
import TestDetailService from './testDetail/testDetail.service';
import TimeTableService from './timeTable/timeTable.service';
import QuestionService from './question/question.service';
import AnswerService from './answer/answer.service';
import StudentService from './student/student.service';
import UserService from './user/user.service';
import LogService from './log/log.service';
import ResultService from './result/result.service';
import statesService from './navigation/states.service';

import FacultyController from './faculty/faculty.controller';
import AdminController from './admin.controller';
import navigationSectionsService from './navigation/navigation.service';

import adminRouter from './admin.route';
import facultyRouter from './faculty/faculty.route';
import userRouter from './user/user.route';

let AdminModule = angular.module('dTestAngular.admin', []);

AdminModule
  .config(adminRouter)
  .config(facultyRouter)
  .config(userRouter)
  .constant('statesService', statesService)
  .service('faculty', FacultyService)
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
  .controller('FacultyController', FacultyController);

export default AdminModule;
