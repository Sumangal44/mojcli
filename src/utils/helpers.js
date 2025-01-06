const fs = require('fs-extra');
const path = require('path');

/**
 * Check if a directory exists.
 * @param {string} dirPath - The path to the directory.
 * @returns {boolean} - Returns true if the directory exists, otherwise false.
 */
const directoryExists = (dirPath) => {
  try {
    return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
  } catch (error) {
    console.error('Error checking directory:', error);
    return false;
  }
};

/**
 * Create a directory if it does not exist.
 * @param {string} dirPath - The path to the directory.
 */
const createDirectory = (dirPath) => {
  if (!directoryExists(dirPath)) {
    try {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Directory created: ${dirPath}`);
    } catch (error) {
      console.error('Error creating directory:', error);
    }
  }
};

/**
 * Copy files from one directory to another.
 * @param {string} source - The source directory.
 * @param {string} destination - The destination directory.
 */
const copyFiles = (source, destination) => {
  try {
    fs.copySync(source, destination);
    console.log(`Files copied from ${source} to ${destination}`);
  } catch (error) {
    console.error('Error copying files:', error);
  }
};

/**
 * Remove a directory and its contents.
 * @param {string} dirPath - The path to the directory to remove.
 */
const removeDirectory = (dirPath) => {
  try {
    if (directoryExists(dirPath)) {
      fs.removeSync(dirPath);
      console.log(`Directory removed: ${dirPath}`);
    }
  } catch (error) {
    console.error('Error removing directory:', error);
  }
};

/**
 * Check if a file exists.
 * @param {string} filePath - The path to the file.
 * @returns {boolean} - Returns true if the file exists, otherwise false.
 */
const fileExists = (filePath) => {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    console.error('Error checking file:', error);
    return false;
  }
};

/**
 * Execute a shell command.
 * @param {string} command - The command to execute.
 * @param {object} options - Options for the shell execution.
 * @returns {string} - The output from the command execution.
 */
const executeCommand = (command, options = {}) => {
  const { execSync } = require('child_process');
  try {
    const output = execSync(command, options);
    return output.toString();
  } catch (error) {
    console.error('Error executing command:', error);
    return '';
  }
};

/**
 * Display a message in color.
 * @param {string} message - The message to display.
 * @param {string} color - The color for the message.
 */
const displayMessage = (message, color) => {
  const chalk = require('chalk');
  console.log(chalk[color](message));
};

module.exports = {
  directoryExists,
  createDirectory,
  copyFiles,
  removeDirectory,
  fileExists,
  executeCommand,
  displayMessage,
};
