import minimist from 'minimist';
import optionDefault from './utils/option-default';
import _ from 'lodash';
import cliclopts from 'cliclopts';
import {
  WORKING_DIRECTORY_VAR,
  DEFAULT_WORKING_DIR,
  MULTIPLE_WORKING_DIRECTORIES_ERROR,
  NO_NAME_ERROR,
  USAGE_TEXT,
} from './constants';

const defaultWorkingDirectory = optionDefault(
  WORKING_DIRECTORY_VAR,
  DEFAULT_WORKING_DIR,
);

const cliOpts = cliclopts([{
  name: 'working-dir',
  abbr: 'w',
  default: defaultWorkingDirectory,
  help: 'The directory in which to create socket files, etc',
}, {
  name: 'help',
  abbr: 'h',
  alias: ['?'],
  boolean: true,
  help: 'Show help',
}, {
  name: 'version',
  abbr: 'v',
  boolean: true,
  help: 'Show version number',
}]);

export function help() {
  return USAGE_TEXT + cliOpts.usage() + '\n';
}

export function parse(argv) {
  const parsed = minimist(argv, Object.assign(cliOpts.options(), {
    stopEarly: true,
  }));
  if (parsed.version) {
    return {
      version: true,
    };
  }
  if (parsed.help) {
    return {
      help: true,
    };
  }
  if (parsed['working-dir'] instanceof Array) {
    return {
      error: MULTIPLE_WORKING_DIRECTORIES_ERROR,
    };
  }
  const name = parsed._[0];
  if (_.isUndefined(name)) {
    return {
      error: NO_NAME_ERROR,
    };
  }
  const workingDir = parsed['working-dir'];
  return {
    name,
    workingDir,
    help: false,
    version: false,
  };
};
