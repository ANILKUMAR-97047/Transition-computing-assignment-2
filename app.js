const express = require("express");
const path = require("path");
const { fetchApplicationData } = require("./routes/apiService");
const { evaluateChecklist } = require("./routes/checklistEvaluator");

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route to evaluate checklist
app.get("/", async (req, res) => {
  try {
    const applicationData = await fetchApplicationData();
    const results = evaluateChecklist(applicationData);
    res.render("dashboard", { results });
  } catch (error) {
    res.status(500).send("Error loading the checklist system");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
