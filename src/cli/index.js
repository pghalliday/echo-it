import {
  help,
  parse,
} from './options';
import {listen} from '../';

// istanbul ignore next
module.exports = function cli(argv) {
  const opts = parse(argv);
  if (opts.version) {
    console.log(require('../../package.json').version);
    process.exit(0);
  }
  if (opts.help) {
    process.stdout.write(help());
    process.exit(0);
  }
  if (opts.error) {
    console.log('ERROR: ' + opts.error);
    process.stdout.write(help());
    process.exit(1);
  }
  return listen(opts)
  .catch((error) => {
    console.error(error.stack);
  });
};
