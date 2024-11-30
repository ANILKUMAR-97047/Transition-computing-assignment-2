/**
 * Checklist Rules Configuration
 * ------------------------------
 * Each rule is an object with the following properties:
 * - id: Unique identifier (integer).
 * - name: A descriptive name for the rule (string).
 * - condition: A function that evaluates the rule and returns true/false.
 *
 * Example to Add a New Rule:
 * {
 *   id: 6,
 *   name: "Minimum Age Above 18",
 *   condition: (data) => data.age >= 18,
 * }
 */

module.exports = [
    {
      id: 1,
      name: "Valuation Fee Paid",
      condition: (data) => data.isValuationFeePaid === true,
    },
    {
      id: 2,
      name: "UK Resident",
      condition: (data) => data.isUkResident === true,
    },
    {
      id: 3,
      name: "Risk Rating Medium",
      condition: (data) => data.riskRating === "Medium",
    },
    {
      id: 4,
      name: "LTV Below 60%",
      condition: (data) =>
        (data.loanRequired / data.purchasePrice) * 100 < 60,
    },
  ];
  