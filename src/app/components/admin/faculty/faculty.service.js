"use strict";

export class FacultyService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'http://ec2-54-69-82-91.us-west-2.compute.amazonaws.com/';
    this.entity = 'Faculty';
  }

  getRecords() {
    return this.$http.get(`${this.apiHost}${this.entity}/getRecords`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getFaculties.\n' + angular.toJson(error.data, true));
      });
  }
  getListRange(limit, offset) {
    return this.$http.get(`${this.apiHost}${this.entity}/getRecordsRange/${limit}/${offset}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getFaculties.\n' + angular.toJson(error.data, true));
      });
  }
  getById(id) {
    return this.$http.get(`${this.apiHost}${this.entity}/getRecords/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getFacultyById.\n' + angular.toJson(error.data, true));
      });
  }
  getCount() {
    return this.$http.get(`${this.apiHost}${this.entity}/countRecords`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getFacultiesCountRecords.\n' + angular.toJson(error.data, true));
      });
  }
  create(data) {
    return this.$http.post(`${this.apiHost}${this.entity}/insertData`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for createFaculty.\n' + angular.toJson(error.data, true));
      });
  }
  update(id, data) {
    return this.$http.post(`${this.apiHost}${this.entity}/update/${id}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for updateFacultyById.\n' + angular.toJson(error.data, true));
      });
  }
  remove(id) {
    return this.$http.get(`${this.apiHost}${this.entity}/del/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for removeFaculty.\n' + angular.toJson(error.data, true));
      });
  }


}
