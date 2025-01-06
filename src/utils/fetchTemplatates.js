const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs-extra");

const templatesRepo = "https://github.com/your-repo/templates";
const templatesDir = path.join(__dirname, "../../templates");

const fetchTemplates = () => {
  if (fs.existsSync(templatesDir)) {
    console.log("Updating templates...");
    execSync(`git -C ${templatesDir} pull`, { stdio: "inherit" });
  } else {
    console.log("Cloning templates...");
    execSync(`git clone ${templatesRepo} ${templatesDir}`, { stdio: "inherit" });
  }
};

module.exports = fetchTemplates;
