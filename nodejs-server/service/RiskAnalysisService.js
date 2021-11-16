'use strict';


/**
 * retrieve risk score given businessId
 * Retrieve risk score of business based on businessId
 *
 * businessId String ID of the business you wish retrieve risk score from
 * returns inline_response_200
 **/
exports.getRiskScore = function(businessId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "covidTestingRisk" : 2,
  "industryExposure" : 2,
  "averageAgeRisk" : 1,
  "vaccinationRisk" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

