'use strict';

var utils = require('../utils/writer.js');
var Employee = require('../service/EmployeeService');

module.exports.addEmployeeRecord = function addEmployeeRecord (req, res, next, body) {
  Employee.addEmployeeRecord(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEmployee = function deleteEmployee (req, res, next, employeeId) {
  Employee.deleteEmployee(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeeById = function getEmployeeById (req, res, next, employeeId) {
  Employee.getEmployeeById(employeeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEmployeesByBusiness = function getEmployeesByBusiness (req, res, next, businessId) {
  Employee.getEmployeesByBusiness(businessId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEmployee = function updateEmployee (req, res, next, body) {
  Employee.updateEmployee(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
