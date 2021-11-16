'use strict';

var utils = require('../utils/writer.js');
var Notification = require('../service/NotificationService');

module.exports.acknowledgeNotification = function acknowledgeNotification (req, res, next, notifId) {
  Notification.acknowledgeNotification(notifId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addNotification = function addNotification (req, res, next, body, adminId) {
  Notification.addNotification(body, adminId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteNotification = function deleteNotification (req, res, next, clientId, notifId) {
  Notification.deleteNotification(clientId, notifId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllNotification = function getAllNotification (req, res, next, clientId) {
  Notification.getAllNotification(clientId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllUnacknowledgedNotification = function getAllUnacknowledgedNotification (req, res, next, clientId) {
  Notification.getAllUnacknowledgedNotification(clientId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNotification = function getNotification (req, res, next, notifId) {
  Notification.getNotification(notifId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
