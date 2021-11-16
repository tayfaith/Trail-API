'use strict';


/**
 * adds a new client
 * Adds a client to the system
 *
 * body ClientRequest Client to add (optional)
 * returns ClientResponse
 **/
exports.addClient = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "80775c09-673c-4a30-875b-27c4102b5ae5",
  "registeredBusinesses" : {
    "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
    "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
    "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
    "businessName" : "Yeow Leong Chicken Rice",
    "businessDesc" : "welcome! let's Chicken rice!"
  },
  "roles" : [ {
    "roleName" : "ADMIN",
    "id" : 2
  }, {
    "roleName" : "ADMIN",
    "id" : 2
  } ],
  "email" : "faith@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * adds a role
 * Adds a role to the system
 *
 * body Role Role to add (optional)
 * returns Role
 **/
exports.addRole = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "roleId" : 1,
  "roleName" : "ADMIN"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * add role to existing client
 * Adds role to an existing client
 *
 * roleName String role that you want to add to the client
 * email String email of the client you want to add the role to
 * no response value expected for this operation
 **/
exports.addRoleToClient = function(roleName,email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete client
 * Delete client from system
 *
 * clientId String ID of the client
 * no response value expected for this operation
 **/
exports.deleteClient = function(clientId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve all clients in the system
 * Retrieve all clients in the system
 *
 * no response value expected for this operation
 **/
exports.getAllClients = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve client based on client email
 * Retrieve client based on client email
 *
 * email String email of the client
 * returns ClientResponse
 **/
exports.getClientByEmail = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "80775c09-673c-4a30-875b-27c4102b5ae5",
  "registeredBusinesses" : {
    "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
    "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
    "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
    "businessName" : "Yeow Leong Chicken Rice",
    "businessDesc" : "welcome! let's Chicken rice!"
  },
  "roles" : [ {
    "roleName" : "ADMIN",
    "id" : 2
  }, {
    "roleName" : "ADMIN",
    "id" : 2
  } ],
  "email" : "faith@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve client based on clientId
 * Retrieve client based on clientId
 *
 * clientId String ID of the client you wish retrieve
 * returns ClientResponse
 **/
exports.getClientById = function(clientId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "80775c09-673c-4a30-875b-27c4102b5ae5",
  "registeredBusinesses" : {
    "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
    "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
    "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
    "businessName" : "Yeow Leong Chicken Rice",
    "businessDesc" : "welcome! let's Chicken rice!"
  },
  "roles" : [ {
    "roleName" : "ADMIN",
    "id" : 2
  }, {
    "roleName" : "ADMIN",
    "id" : 2
  } ],
  "email" : "faith@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update details of client
 * Update details of a client
 *
 * body ClientRequest Client to update (optional)
 * clientId String ID of the client you wish to update
 * returns ClientResponse
 **/
exports.updateClient = function(body,clientId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "createdAt" : "2021-11-15T15:16:05.259Z",
  "clientId" : "80775c09-673c-4a30-875b-27c4102b5ae5",
  "registeredBusinesses" : {
    "industryId" : "31f7b236-71a6-4a1f-b7da-eb94338418b6",
    "clientId" : "a66c2f2e-a359-488d-ab3b-c1242e74ae21",
    "businessId" : "98800244-d07e-41bd-a5f4-b30699db51c5",
    "businessName" : "Yeow Leong Chicken Rice",
    "businessDesc" : "welcome! let's Chicken rice!"
  },
  "roles" : [ {
    "roleName" : "ADMIN",
    "id" : 2
  }, {
    "roleName" : "ADMIN",
    "id" : 2
  } ],
  "email" : "faith@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

