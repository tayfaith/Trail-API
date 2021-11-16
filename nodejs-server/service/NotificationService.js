'use strict';


/**
 * sets acknowledged to true for a notification
 * Updates acknowledged status to true for an existing grant
 *
 * notifId String ID of the notification to be acknowledged
 * returns NotificationResponseA
 **/
exports.acknowledgeNotification = function(notifId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notifId" : "d4b5c776-25e1-4f23-bcfe-7fffa55f2ca6",
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "82a23627-55f2-441a-85e0-5a621f467fff",
  "messageBody" : "This is an alert",
  "acknowleged" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adds a new notification
 * Adds a notification to the system
 *
 * body NotificationRequest Notification to be added (optional)
 * adminId String ID of the admin for authorization purposes
 * returns NotificationResponseU
 **/
exports.addNotification = function(body,adminId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notifId" : "d4b5c776-25e1-4f23-bcfe-7fffa55f2ca6",
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "82a23627-55f2-441a-85e0-5a621f467fff",
  "messageBody" : "This is an alert",
  "acknowleged" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete notification
 * Delete a notification from the system
 *
 * clientId String ID of the client deleting the notification
 * notifId String ID of the notification to be deleted
 * no response value expected for this operation
 **/
exports.deleteNotification = function(clientId,notifId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve all notifications of a client by clientId
 * Retrieve all notifications of a client in the system by clientId
 *
 * clientId String ID of the client that you want to retrieve notifications for
 * returns List
 **/
exports.getAllNotification = function(clientId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "notifId" : "d4b5c776-25e1-4f23-bcfe-7fffa55f2ca6",
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "82a23627-55f2-441a-85e0-5a621f467fff",
  "messageBody" : "This is an alert",
  "acknowleged" : true
}, {
  "notifId" : "d4b5c776-25e1-4f23-bcfe-7fffa55f2ca6",
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "82a23627-55f2-441a-85e0-5a621f467fff",
  "messageBody" : "This is an alert",
  "acknowleged" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve all unacknowledged notifications of a client by clientId
 * Retrieve all unacknowledged notifications of a client in the system by clientId
 *
 * clientId String ID of the client that you want to retrieve notifications for
 * returns List
 **/
exports.getAllUnacknowledgedNotification = function(clientId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "notifId" : "d4b5c776-25e1-4f23-bcfe-7fffa55f2ca6",
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "82a23627-55f2-441a-85e0-5a621f467fff",
  "messageBody" : "This is an alert",
  "acknowleged" : false
}, {
  "notifId" : "d4b5c776-25e1-4f23-bcfe-7fffa55f2ca6",
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "82a23627-55f2-441a-85e0-5a621f467fff",
  "messageBody" : "This is an alert",
  "acknowleged" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve notification based on notifId
 * Retrieves notification based on notifId
 *
 * notifId String ID of the notification to be retrieved
 * returns NotificationResponseA
 **/
exports.getNotification = function(notifId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "notifId" : "d4b5c776-25e1-4f23-bcfe-7fffa55f2ca6",
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "82a23627-55f2-441a-85e0-5a621f467fff",
  "messageBody" : "This is an alert",
  "acknowleged" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

