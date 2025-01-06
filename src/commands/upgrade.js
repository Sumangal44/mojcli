const { execSync } = require("child_process");

const upgradeCLI = () => {
  console.log("Upgrading Framework CLI...");
  try {
    execSync("npm install -g framework-cli", { stdio: "inherit" });
    console.log("Framework CLI upgraded successfully!");
  } catch (error) {
    console.error("Failed to upgrade Framework CLI.");
  }
};

module.exports = upgradeCLI;
