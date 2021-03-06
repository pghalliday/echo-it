'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _net = require('net');

var _promisify = require('./utils/promisify');

var _promisify2 = _interopRequireDefault(_promisify);

var _socket = require('./utils/socket');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var workingDir = _ref.workingDir,
        name = _ref.name;
    var socket, echo;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _net.createConnection;
            _context.next = 3;
            return (0, _socket2.default)({
              workingDir: workingDir,
              name: name
            });

          case 3:
            _context.t1 = _context.sent;
            socket = (0, _context.t0)(_context.t1);
            echo = (0, _promisify2.default)(socket.write.bind(socket));

            echo.end = (0, _promisify2.default)(socket.end.bind(socket));
            echo.socket = socket;
            return _context.abrupt('return', echo);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function connect(_x) {
    return _ref2.apply(this, arguments);
  }

  return connect;
}();