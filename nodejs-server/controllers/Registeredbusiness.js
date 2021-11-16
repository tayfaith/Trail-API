'use strict';

var utils = require('../utils/writer.js');
var Registeredbusiness = require('../service/RegisteredbusinessService');

module.exports.addRegisteredBusiness = function addRegisteredBusiness (req, res, next, body) {
  Registeredbusiness.addRegisteredBusiness(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteRegisteredBusiness = function deleteRegisteredBusiness (req, res, next, businessId) {
  Registeredbusiness.deleteRegisteredBusiness(businessId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllRegisteredBusinesses = function getAllRegisteredBusinesses (req, res, next) {
  Registeredbusiness.getAllRegisteredBusinesses()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegisteredBusiness = function getRegisteredBusiness (req, res, next, businessId) {
  Registeredbusiness.getRegisteredBusiness(businessId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateRegisteredBusiness = function updateRegisteredBusiness (req, res, next, body, businessId) {
  Registeredbusiness.updateRegisteredBusiness(body, businessId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
