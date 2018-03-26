'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var WORKING_DIRECTORY_VAR = exports.WORKING_DIRECTORY_VAR = 'ECHO_IT_WORKING_DIRECTORY';
var DEFAULT_WORKING_DIR = exports.DEFAULT_WORKING_DIR = '.echo-it';
var USAGE_TEXT = exports.USAGE_TEXT = '\nUsage: echo-it [options] <name>\n\nStart an echo-it server with the given name\n\nEnvironment Variables:\n\n' + WORKING_DIRECTORY_VAR + '\n\n<name>: The name of the server\n\nOptions:\n';
// eslint-disable-next-line max-len
var MULTIPLE_WORKING_DIRECTORIES_ERROR = exports.MULTIPLE_WORKING_DIRECTORIES_ERROR = 'Working directory specified multiple times';
var NO_NAME_ERROR = exports.NO_NAME_ERROR = 'Name not specified';