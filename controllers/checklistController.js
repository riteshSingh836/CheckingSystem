const axios = require("axios");
const checklistRules = require("../config/checklistRules");

// Fetch input data from the API endpoint
const fetchData = async () => {
  const apiUrl =
    "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639";
  const response = await axios.get(apiUrl);
  return response.data; // Return the API response data
};

// Evaluate each rule dynamically based on the fetched data
const evaluateChecklist = (data) => {
  return checklistRules.map((rule) => ({
    name: rule.name,
    status: rule.condition(data) ? "Passed" : "Failed", // Check if the condition passes or fails
  }));
};

module.exports = {
  fetchData,
  evaluateChecklist,
};
