'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// istanbul ignore next
var getSocket = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$server = _ref.server,
        server = _ref$server === undefined ? false : _ref$server,
        _ref$workingDir = _ref.workingDir,
        workingDir = _ref$workingDir === undefined ? _constants.DEFAULT_WORKING_DIR : _ref$workingDir,
        name = _ref.name;

    var file, namedPipe, _namedPipe;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pmkdirp(workingDir);

          case 2:
            file = _path2.default.join(workingDir, (0, _sanitizeFilename2.default)(name, {
              replacement: '__'
            }));

            if (!server) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return punlink(file);

          case 6:
            if (!(process.platform === 'win32')) {
              _context.next = 20;
              break;
            }

            if (!server) {
              _context.next = 14;
              break;
            }

            namedPipe = '\\\\.\\pipe\\' + (0, _uuid.v1)();
            _context.next = 11;
            return pwriteFile(file, namedPipe);

          case 11:
            return _context.abrupt('return', namedPipe);

          case 14:
            _context.next = 16;
            return preadFile(file);

          case 16:
            _namedPipe = _context.sent;
            return _context.abrupt('return', _namedPipe.toString());

          case 18:
            _context.next = 21;
            break;

          case 20:
            return _context.abrupt('return', file);

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSocket(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

var _fs = require('fs');

var _uuid = require('uuid');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sanitizeFilename = require('sanitize-filename');

var _sanitizeFilename2 = _interopRequireDefault(_sanitizeFilename);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _constants = require('../cli/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pmkdirp = (0, _promisify2.default)(_mkdirp2.default);
var punlink = (0, _promisify2.default)(_fs.unlink);
var preadFile = (0, _promisify2.default)(_fs.readFile);
var pwriteFile = (0, _promisify2.default)(_fs.writeFile);exports.default = getSocket;