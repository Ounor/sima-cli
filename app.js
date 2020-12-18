#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet");
const inquirer  = require('./lib/inquirer');

console.log(
  chalk.yellow(
    figlet.textSync('Sima CLI', { horizontalLayout: 'full' })
  )
);
inquirer.start();
