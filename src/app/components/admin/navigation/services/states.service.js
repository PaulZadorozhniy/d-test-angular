'use strict';

const statesService = {
  Faculties: {
    index: 'admin.faculty',
    create: 'admin.faculty.create',
    edit: 'admin.faculty.edit'
  },
  Specialities: {
    index: 'admin.speciality',
    create: 'admin.speciality.create',
    edit: 'admin.speciality.edit'
  },
  Groups: {
    index: 'admin.group',
    create: 'admin.group.create',
    edit: 'admin.group.edit'
  },
  Subjects: {
    index: 'admin.subject',
    create: 'admin.subject.create',
    edit: 'admin.subject.edit'
  },
  Tests: {
    index: 'admin.test',
    create: 'admin.test.create',
    edit: 'admin.test.edit'
  },
  'Test Details': {
    index: 'admin.testDetails',
    create: 'admin.testDetails.create',
    edit: 'admin.testDetails.edit'
  },
  'Time Tables': {
    index: 'admin.timeTable',
    create: 'admin.timeTable.create',
    edit: 'admin.timeTable.edit'
  },
  Questions: {
    index: 'admin.question',
    create: 'admin.question.create',
    edit: 'admin.question.edit'
  },
  Answers: {
    index: 'admin.answer',
    create: 'admin.answer.create',
    edit: 'admin.answer.edit'
  },
  Students: {
    index: 'admin.student',
    create: 'admin.student.create',
    edit: 'admin.student.edit'
  },
  Users: {
    index: 'admin.user',
    create: 'admin.user.create',
    edit: 'admin.user.edit'
  },
  Logs: {
    index: 'admin.log',
    create: 'admin.log.create',
    edit: 'admin.log.edit'
  },
  Results: {
    index: 'admin.result',
    create: 'admin.result.create',
    edit: 'admin.result.edit'
  }
};

export default statesService;
