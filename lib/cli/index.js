'use strict';

var _options = require('./options');

var _ = require('../');

// istanbul ignore next
module.exports = function cli(argv) {
  var opts = (0, _options.parse)(argv);
  if (opts.version) {
    console.log(require('../../package.json').version);
    process.exit(0);
  }
  if (opts.help) {
    process.stdout.write((0, _options.help)());
    process.exit(0);
  }
  if (opts.error) {
    console.log('ERROR: ' + opts.error);
    process.stdout.write((0, _options.help)());
    process.exit(1);
  }
  return (0, _.listen)(Object.assign({}, opts, {
    out: process.stdout
  })).catch(function (error) {
    console.error(error.stack);
  });
};