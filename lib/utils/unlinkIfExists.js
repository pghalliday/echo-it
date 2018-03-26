'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// istanbul ignore next
var unlinkIfExists = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(0, _fs.existsSync)(file)) {
              _context.next = 3;
              break;
            }

            _context.next = 3;
            return punlink(file);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function unlinkIfExists(_x) {
    return _ref.apply(this, arguments);
  };
}();

var _fs = require('fs');

var _promisify = require('./promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var punlink = (0, _promisify2.default)(_fs.unlink);exports.default = unlinkIfExists;