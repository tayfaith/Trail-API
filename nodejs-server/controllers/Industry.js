'use strict';

var utils = require('../utils/writer.js');
var Industry = require('../service/IndustryService');

module.exports.addIndustry = function addIndustry (req, res, next, body, adminId) {
  Industry.addIndustry(body, adminId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteIndustry = function deleteIndustry (req, res, next, adminId, industryId) {
  Industry.deleteIndustry(adminId, industryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllIndustryNames = function getAllIndustryNames (req, res, next) {
  Industry.getAllIndustryNames()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIndustry = function getIndustry (req, res, next, industryId) {
  Industry.getIndustry(industryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getIndustrySubtypes = function getIndustrySubtypes (req, res, next, industry Name) {
  Industry.getIndustrySubtypes(industry Name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateIndustry = function updateIndustry (req, res, next, body, adminId) {
  Industry.updateIndustry(body, adminId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
