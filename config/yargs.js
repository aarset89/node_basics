const yargs = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Base multiplication',
  })
  .option('t', {
    alias: 'times',
    type: 'number',
    default: 0,
    demandOption: true,
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'asd',
  })

  .check((argv, options) => {
    if (isNaN(argv.base || argv.times)) {
      throw 'Base and times must be a number';
    }
    return true;
  }).argv;

module.exports = yargs;
