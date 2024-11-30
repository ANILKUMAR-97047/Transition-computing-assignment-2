const rules = require("../config/checklistRules");

const evaluateChecklist = (data) => {
  return rules.map((rule) => ({
    id: rule.id,
    name: rule.name,
    status: rule.condition(data) ? "Passed" : "Failed",
  }));
};


module.exports = { evaluateChecklist };
