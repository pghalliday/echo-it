'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var listen = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var out = _ref.out,
        workingDir = _ref.workingDir,
        name = _ref.name;

    var server, _listen, _close;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // istanbul ignore next
            out = out || process.stdout;
            server = (0, _net.createServer)(function (client) {
              client.on('data', out.write.bind(out));
            });
            _listen = (0, _promisify2.default)(server.listen.bind(server));
            _close = (0, _promisify2.default)(server.close.bind(server));
            _context.t0 = _listen;
            _context.next = 7;
            return (0, _socket2.default)({
              workingDir: workingDir,
              name: name,
              server: true
            });

          case 7:
            _context.t1 = _context.sent;
            _context.next = 10;
            return (0, _context.t0)(_context.t1);

          case 10:
            return _context.abrupt('return', _close);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function listen(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _net = require('net');

var _promisify = require('./utils/promisify');

var _promisify2 = _interopRequireDefault(_promisify);

var _socket = require('./utils/socket');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = listen;