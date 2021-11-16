'use strict';


/**
 * adds a new guideline
 * Adds a guideline to the system
 *
 * body GuidelineRequest Guideline to add (optional)
 * adminId String ID of the admin for authorization purposes
 * returns GuidelineResponse
 **/
exports.addGuideline = function(body,adminId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * delete guideline
 * Delete guideline from system
 *
 * adminId String ID of the admin for authorization purposes
 * guidelineId String ID of the guideline you wish to delete
 * no response value expected for this operation
 **/
exports.deleteGuideline = function(adminId,guidelineId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve all guidelines in the system
 * Retrieves all guidelines
 *
 * no response value expected for this operation
 **/
exports.getAllGuidelines = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * retrieve guideline based on guidelineId
 * Retrieves guideline based on guidelineId
 *
 * guidelineId String ID of the guideline you wish retrieve
 * returns GuidelineResponse
 **/
exports.getGuideline = function(guidelineId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * retrieve latest guideline based on industryId
 * Retrieves latest guideline based on industryId
 *
 * industryId String ID of the industry you wish retrieve its guideline from
 * returns GuidelineResponse
 **/
exports.getLatestGuidelineByIndustry = function(industryId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update details of existing guideline
 * Update details of existing guideline
 *
 * body GuidelineRequest Guideline to update (optional)
 * adminId String ID of the admin for authorization purposes
 * returns GuidelineResponse
 **/
exports.updateGuideline = function(body,adminId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

