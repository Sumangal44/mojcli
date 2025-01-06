#!/usr/bin/env node

const { Command } = require("commander");
const updateNotifier = require("update-notifier");
const chalk = require("chalk");
const createProject = require("./commands/create");
const upgradeCLI = require("./commands/upgrade");
const pkg = require("../package.json");

// Notify about updates
updateNotifier({ pkg }).notify();

const program = new Command();

program
  .name("framework-cli")
  .description("CLI for creating projects with templates")
  .version(pkg.version);

program
  .command("create <project-name>")
  .description("Create a new project from a template")
  .action(createProject);

program
  .command("upgrade")
  .description("Upgrade Framework CLI to the latest version")
  .action(upgradeCLI);

program.parse();
