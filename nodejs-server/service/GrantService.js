'use strict';


/**
 * adds a new grant
 * Adds a grant to the system
 *
 * body GrantRequest Grant to be added (optional)
 * adminId String ID of the admin for authorization purposes
 * returns GrantResponse
 **/
exports.addGrant = function(body,adminId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * add industry to grant
 * Adds an industry to a grant
 *
 * body AddIndustryToGrantRequest ID of the admin for authorization purposes, name of industry to be added to grant, and grant for which industry is to be added (optional)
 * returns GrantResponse
 **/
exports.addIndustryToGrant = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete grant
 * Delete a grant from the system
 *
 * adminId String ID of the admin for authorization purposes
 * grantId String ID of the grant to be deleted
 * no response value expected for this operation
 **/
exports.deleteGrant = function(adminId,grantId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve all grants in the system
 * Retrieves all grants
 *
 * returns List
 **/
exports.getAllGrants = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
}, {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve all grants by industry subtype
 * Retrieve all industries in the system by industry subtype
 *
 * industrySubtype String Industry Subtype that you want to search grants for
 * returns List
 **/
exports.getAllGrantsByIndustry = function(industrySubtype) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
}, {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve grant based on grantId
 * Retrieves grant based on grantId
 *
 * grantId String ID of the grant to be retrieved
 * returns GrantResponse
 **/
exports.getGrant = function(grantId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update details of existing grant
 * Update details of an existing grant
 *
 * body GrantRequestWithId Grant to be updated (optional)
 * adminId String ID of the admin for authorization purposes
 * returns GrantResponse
 **/
exports.updateGrant = function(body,adminId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "grantName" : "Productivity Solutions Grant",
  "benefits" : "Up to 80% of costs reimbursed",
  "grantLink" : "https://www.gobusiness.gov.sg/productivity-solutions-grant/",
  "industryId" : [ "4090bdc2-ebbe-46ca-b626-bd4dd34a9523", "4090bdc2-ebbe-46ca-b626-bd4dd34a9523" ],
  "grantId" : "62fafab6-7c47-43a9-9308-8b912de4e083",
  "provider" : "gobusinesssg",
  "eligibilityCriteria" : "Singapore run business",
  "value" : 30000,
  "grantDesc" : "Grant to aid businesses in implementing productive technology",
  "applicationProcess" : "Buy from approved vendors and apply for grant with receipt"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

