'use strict';


/**
 * adds a new industry
 * Adds an industry to the system
 *
 * body IndustryRequest Industry to be added (optional)
 * adminId String ID of the admin for authorization purposes
 * returns IndustryResponse
 **/
exports.addIndustry = function(body,adminId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "industryName" : "F&B",
  "industrySubtype" : "Hawker",
  "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
  "registeredBusinesses" : [ {
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
  } ],
  "guidelines" : [ {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  }, {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  } ],
  "industryDesc" : "SFA coffee shop / eating house / canteen license"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete industry
 * Delete an industry from the system
 *
 * adminId String ID of the admin for authorization purposes
 * industryId String ID of the industry to be deleted
 * no response value expected for this operation
 **/
exports.deleteIndustry = function(adminId,industryId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve all industry names
 * Retrieve all industry names
 *
 * returns List
 **/
exports.getAllIndustryNames = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve industry based on industryId
 * Retrieves an industry based on industryId
 *
 * industryId String ID of the industry to be retrieved
 * returns IndustryResponse
 **/
exports.getIndustry = function(industryId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "industryName" : "F&B",
  "industrySubtype" : "Hawker",
  "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
  "registeredBusinesses" : [ {
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
  } ],
  "guidelines" : [ {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  }, {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  } ],
  "industryDesc" : "SFA coffee shop / eating house / canteen license"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve all industries in the system, or industries with industry name if provided
 * Retrieve all industries in the system, or industries with industry name if provided
 *
 * industry Name String Retrieve all industry subtypes with given industry name if provided (optional)
 * returns List
 **/
exports.getIndustrySubtypes = function(industry Name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "industryName" : "F&B",
  "industrySubtype" : "Hawker",
  "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
  "registeredBusinesses" : [ {
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
  } ],
  "guidelines" : [ {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  }, {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  } ],
  "industryDesc" : "SFA coffee shop / eating house / canteen license"
}, {
  "industryName" : "F&B",
  "industrySubtype" : "Hawker",
  "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
  "registeredBusinesses" : [ {
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
  } ],
  "guidelines" : [ {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  }, {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  } ],
  "industryDesc" : "SFA coffee shop / eating house / canteen license"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update details of existing industry
 * Update details of an existing industry
 *
 * body IndustryRequestWithId Industry to be updated (optional)
 * adminId String ID of the admin for authorization purposes
 * returns IndustryResponse
 **/
exports.updateIndustry = function(body,adminId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "industryName" : "F&B",
  "industrySubtype" : "Hawker",
  "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
  "registeredBusinesses" : [ {
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
  } ],
  "guidelines" : [ {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  }, {
    "opCapacity" : 75,
    "opCapacityDetails" : "Only allowed 75% capacity at each time slot",
    "covidTestingUnvaccinated" : 14,
    "covidTestingDetails" : "From 15 July 2021, all individuals working at F&B establishments providing dine-in services must undergo testing once every 14 days using tests",
    "opGuidelines" : "Clearly demarcate queue lines, put up signage to guide customers on where to queue to order and collect food, and ensure at least one-metre spacing between individual customers at areas such as entrances and cashier counters.",
    "contactTracingDetails" : "F&B establishments must implement SafeEntry via TraceTogether-only SafeEntry (TT-only SE) for customers and visitors, with the exception of those that only provide takeaway and/or delivery, with no dine-in services",
    "canOpOnSiteDetails" : "F&B establishments are allowed to continue food service operations, with the exception of establishments with Pubs, Bars, Nightclubs, Discos and Karaoke SFA license categories or SSIC codes starting with 5613.",
    "referenceLink" : "https://www.stb.gov.sg/content/stb/en/home-pages/advisory-for-food-and-beverage-establishments.html#_ftn2",
    "canOpOnSite" : true,
    "industryId" : "9ec9e4d1-9e64-4be8-a04a-5cd87e87ebb4",
    "contactTracing" : "SafeEntry",
    "groupSizeDetails" : "As hawker centres and coffeeshops are open-air and naturally ventilated spaces, a special concession would be given to allow vaccinated and unvaccinated individuals to dine in these settings, but subject to group sizes of up to 2 persons only.",
    "groupSize" : 2,
    "covidTestingVaccinated" : 7
  } ],
  "industryDesc" : "SFA coffee shop / eating house / canteen license"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

