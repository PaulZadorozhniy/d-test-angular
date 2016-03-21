export class MainController {
  constructor (faculty, speciality, $log) {
    'ngInject';

    this.hello = 'Hello';
    this.creationDate = new Date();

    speciality.getRecords().then(function (result) {
      $log.log(result);
    });

    //faculty.getRecords();
    //faculty.getById(1);
    //faculty.create({
    //    faculty_name: 'Biology' + new Date().getTime(),
    //    faculty_description: 'Description'
    //});
    //faculty.update(12, {
    //    faculty_name: 'Biology' + new Date().getTime(),
    //    faculty_description: 'Description' + new Date().getTime()
    //});
    //faculty.remove(15);
  }
}
