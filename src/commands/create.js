const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const { execSync } = require("child_process");
const fetchTemplates = require("../utils/fetchTemplates");

const createProject = async (projectName) => {
  fetchTemplates();

  const templates = ["vite-vanilla", "vite-vanilla-ts", "vite-react", "vite-react-ts"];
  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Choose a template:",
      choices: templates,
    },
  ]);

  const projectDir = path.join(process.cwd(), projectName);
  const templateDir = path.join(__dirname, "../../templates", template);

  if (fs.existsSync(projectDir)) {
    console.error(`Error: Directory "${projectName}" already exists.`);
    process.exit(1);
  }

  console.log("Creating project...");
  fs.copySync(templateDir, projectDir);

  console.log("Installing dependencies...");
  process.chdir(projectDir);
  execSync("npm install", { stdio: "inherit" });

  console.log(`\nProject created successfully! Navigate to ${projectName}`);
  console.log("Run the following commands:");
  console.log(`  cd ${projectName}`);
  console.log("  npm run dev");
};

module.exports = createProject;
