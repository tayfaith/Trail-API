'use strict';

var utils = require('../utils/writer.js');
var RiskAnalysis = require('../service/RiskAnalysisService');

module.exports.getRiskScore = function getRiskScore (req, res, next, businessId) {
  RiskAnalysis.getRiskScore(businessId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
