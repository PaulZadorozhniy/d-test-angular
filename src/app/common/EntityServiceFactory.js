"use strict";

export default function EntityServiceFactory(entityName) {
  return class {
    constructor ($log, $http, $q) {
      'ngInject';

      this.$log = $log;
      this.$q = $q;
      this.$http = $http;
      // TODO: Substitute config property instead of hardcoded apihost
      this.apiHost = 'http://ec2-54-69-82-91.us-west-2.compute.amazonaws.com/';
      this.entity = entityName;
    }

    getRecords() {
      let defer = this.$q.defer();
      this.$http.get(`${this.apiHost}${this.entity}/getRecords`)
      .then((response) => {
        defer.resolve(response.data);
      })
      .catch((error) => {
        this.$log.error(`XHR Failed for get in ${this.entity}Service.\n ${angular.toJson(error.data, true)}`);
        defer.reject(error);
      });

      return defer.promise;
    }

    getListRange(limit, offset) {
      return this.$http.get(`${this.apiHost}${this.entity}/getRecordsRange/${limit}/${offset}`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          this.$log.error(`XHR Failed for get in ${this.entity}Service.\n ${angular.toJson(error.data, true)}`);
        });
    }

    getById(id) {
      return this.$http.get(`${this.apiHost}${this.entity}/getRecords/${id}`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          this.$log.error(`XHR Failed for get by id in ${this.entity}Service.\n ${angular.toJson(error.data, true)}`);
        });
    }

    getCount() {
      return this.$http.get(`${this.apiHost}${this.entity}/countRecords`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          this.$log.error(`XHR Failed for get count records in ${this.entity}Service.
            ${angular.toJson(error.data, true)}`);
        });
    }

    create(data) {
      return this.$http.post(`${this.apiHost}${this.entity}/insertData`, data)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          this.$log.error(`XHR Failed for create in ${this.entity}Service.\n ${angular.toJson(error.data, true)}`);
        });
    }

    update(id, data) {
      return this.$http.post(`${this.apiHost}${this.entity}/update/${id}`, data)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          this.$log.error(`XHR Failed for update by id in ${this.entity}Service.
            ${angular.toJson(error.data, true)}`);
        });
    }

    remove(id) {
      return this.$http.get(`${this.apiHost}${this.entity}/del/${id}`)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          this.$log.error(`XHR Failed for remove in ${this.entity}Service.\n ${angular.toJson(error.data, true)}`);
        });
    }
  };
}
