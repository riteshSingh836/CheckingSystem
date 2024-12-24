// Checklist rules configuration
// Each rule contains a name and a condition function to evaluate against the input data
const checklistRules = [
    {
      name: "Valuation Fee Paid", // Rule name
      condition: (data) => data.isValuationFeePaid === true, // Check if valuation fee is paid
    },
    {
      name: "UK Resident",
      condition: (data) => data.isUkResident === true, // Check if user is a UK resident
    },
    {
      name: "Risk Rating Medium",
      condition: (data) => data.riskRating === "Medium", // Check if risk rating is Medium
    },
    {
      name: "LTV Below 60%",
      condition: (data) => {
        // Calculate Loan-to-Value (LTV) and check if it's below 60%
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return ltv < 60;
      },
    },
  ];
  
  module.exports = checklistRules;
  