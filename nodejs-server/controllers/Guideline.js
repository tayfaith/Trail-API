'use strict';

var utils = require('../utils/writer.js');
var Guideline = require('../service/GuidelineService');

module.exports.addGuideline = function addGuideline (req, res, next, body, adminId) {
  Guideline.addGuideline(body, adminId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGuideline = function deleteGuideline (req, res, next, adminId, guidelineId) {
  Guideline.deleteGuideline(adminId, guidelineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGuidelines = function getAllGuidelines (req, res, next) {
  Guideline.getAllGuidelines()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGuideline = function getGuideline (req, res, next, guidelineId) {
  Guideline.getGuideline(guidelineId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLatestGuidelineByIndustry = function getLatestGuidelineByIndustry (req, res, next, industryId) {
  Guideline.getLatestGuidelineByIndustry(industryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGuideline = function updateGuideline (req, res, next, body, adminId) {
  Guideline.updateGuideline(body, adminId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
