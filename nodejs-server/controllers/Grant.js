'use strict';

var utils = require('../utils/writer.js');
var Grant = require('../service/GrantService');

module.exports.addGrant = function addGrant (req, res, next, body, adminId) {
  Grant.addGrant(body, adminId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addIndustryToGrant = function addIndustryToGrant (req, res, next, body) {
  Grant.addIndustryToGrant(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGrant = function deleteGrant (req, res, next, adminId, grantId) {
  Grant.deleteGrant(adminId, grantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGrants = function getAllGrants (req, res, next) {
  Grant.getAllGrants()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllGrantsByIndustry = function getAllGrantsByIndustry (req, res, next, industrySubtype) {
  Grant.getAllGrantsByIndustry(industrySubtype)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGrant = function getGrant (req, res, next, grantId) {
  Grant.getGrant(grantId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGrant = function updateGrant (req, res, next, body, adminId) {
  Grant.updateGrant(body, adminId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
