const express = require("express");
const { fetchData, evaluateChecklist } = require("./controllers/checklistController");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, "public")));

// Route to fetch data and render the checklist results
app.get("/", async (req, res) => {
  try {
    const data = await fetchData(); // Fetch input data
    const checklistResults = evaluateChecklist(data); // Evaluate checklist rules
    res.render("dashboard", { checklistResults }); // Render results in the dashboard
  } catch (error) {
    res.status(500).send("Error fetching data or evaluating checklist."); // Handle errors
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

