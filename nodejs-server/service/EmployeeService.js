'use strict';


/**
 * adds an employee
 * Adds an employee to the system
 *
 * body EmployeeRequest Employee to add (optional)
 * returns EmployeeResponse
 **/
exports.addEmployeeRecord = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccine" : "Pfizer",
  "lastSwabDate" : "2021-10-10T00:00:00.000+00:00",
  "swabResult" : "Negative",
  "name" : "John Smith",
  "businessId" : "eb3a1261-4a54-4e8c-8cec-36a70581a119",
  "employeeId" : "faae0de8-cd51-4254-a428-586aa47c8636",
  "dateOfBirth" : "2001-08-29T00:00:00.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete employee
 * Delete employee from system
 *
 * employeeId String ID of the employee
 * no response value expected for this operation
 **/
exports.deleteEmployee = function(employeeId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve employee based on employeeId
 * Retrieves employee based on employeeId
 *
 * employeeId String ID of the employee you wish retrieve
 * returns EmployeeResponse
 **/
exports.getEmployeeById = function(employeeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccine" : "Pfizer",
  "lastSwabDate" : "2021-10-10T00:00:00.000+00:00",
  "swabResult" : "Negative",
  "name" : "John Smith",
  "businessId" : "eb3a1261-4a54-4e8c-8cec-36a70581a119",
  "employeeId" : "faae0de8-cd51-4254-a428-586aa47c8636",
  "dateOfBirth" : "2001-08-29T00:00:00.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve employees based on businessId
 * Retrieves employee based on employeeId
 *
 * businessId String ID of the business you wish retrieve employees from
 * no response value expected for this operation
 **/
exports.getEmployeesByBusiness = function(businessId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * update details of employee
 * Updates details of employee
 *
 * body EmployeeResponse Employee to update (optional)
 * returns EmployeeResponse
 **/
exports.updateEmployee = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "vaccine" : "Pfizer",
  "lastSwabDate" : "2021-10-10T00:00:00.000+00:00",
  "swabResult" : "Negative",
  "name" : "John Smith",
  "businessId" : "eb3a1261-4a54-4e8c-8cec-36a70581a119",
  "employeeId" : "faae0de8-cd51-4254-a428-586aa47c8636",
  "dateOfBirth" : "2001-08-29T00:00:00.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

