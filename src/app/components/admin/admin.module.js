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

let AdminModule = angular.module('dTestAngular.admin', []);

AdminModule.service('faculty', FacultyService)
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
  .service('result', ResultService);

export default AdminModule;
