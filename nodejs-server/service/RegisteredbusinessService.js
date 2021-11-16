'use strict';


/**
 * adds a new registered business
 * Adds a registered business to the system
 *
 * body RegisteredBusinessRequest Registered Business to add (optional)
 * returns RegisteredBusinessResponse
 **/
exports.addRegisteredBusiness = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
  "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
  "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
  "businessName" : "Yeow Leong Chicken Rice",
  "businessDesc" : "welcome! let's Chicken rice!"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete business
 * Delete a registered business from the system
 *
 * businessId String ID of the registered business to be deleted
 * no response value expected for this operation
 **/
exports.deleteRegisteredBusiness = function(businessId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve all businesses in the system
 * Retrieves all registered businesses
 *
 * returns List
 **/
exports.getAllRegisteredBusinesses = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
  "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
  "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
  "businessName" : "Yeow Leong Chicken Rice",
  "businessDesc" : "welcome! let's Chicken rice!"
}, {
  "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
  "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
  "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
  "businessName" : "Yeow Leong Chicken Rice",
  "businessDesc" : "welcome! let's Chicken rice!"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve registered business based on businessId
 * Retrieves registered business based on businessId
 *
 * businessId String ID of the business to be retrieved
 * returns RegisteredBusinessResponse
 **/
exports.getRegisteredBusiness = function(businessId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
  "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
  "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
  "businessName" : "Yeow Leong Chicken Rice",
  "businessDesc" : "welcome! let's Chicken rice!"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update details of existing business
 * Update details of an existing registered business
 *
 * body RegisteredBusinessRequest Registered Business to update (optional)
 * businessId String ID of the registered business to be updated
 * returns RegisteredBusinessResponse
 **/
exports.updateRegisteredBusiness = function(body,businessId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
  "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
  "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
  "businessName" : "Yeow Leong Chicken Rice",
  "businessDesc" : "welcome! let's Chicken rice!"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

