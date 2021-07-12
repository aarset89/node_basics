const { error } = require('console');
const { createFile } = require('./helpers/multiply');
const colors = require('colors');
const yargs = require('./config/yargs');

console.clear();

createFile(yargs.base, yargs.times, yargs.list)
  .then((succ) => console.log(colors.rainbow(succ)))
  .catch((err) => console.log(err));
