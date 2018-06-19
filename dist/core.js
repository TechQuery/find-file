'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.which = exports.filter = exports.traverse = undefined;

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncGenerator2 = require('babel-runtime/helpers/asyncGenerator');

var _asyncGenerator3 = _interopRequireDefault(_asyncGenerator2);

var _asyncIterator2 = require('babel-runtime/helpers/asyncIterator');

var _asyncIterator3 = _interopRequireDefault(_asyncIterator2);

var _asyncGeneratorDelegate2 = require('babel-runtime/helpers/asyncGeneratorDelegate');

var _asyncGeneratorDelegate3 = _interopRequireDefault(_asyncGeneratorDelegate2);

/**
 * Traverse File-system
 *
 * @param {string} path - Root path to traverse
 */
var traverse = exports.traverse = function () {
    var _ref = _asyncGenerator3.default.wrap( /*#__PURE__*/_regenerator2.default.mark(function _callee(path) {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, disk, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, name;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!(path === '/' && process.platform === 'win32')) {
                            _context.next = 27;
                            break;
                        }

                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 4;
                        _iterator = (0, _getIterator3.default)((0, _windows.getPartition)());

                    case 6:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 12;
                            break;
                        }

                        disk = _step.value;
                        return _context.delegateYield((0, _asyncGeneratorDelegate3.default)((0, _asyncIterator3.default)(traverse(disk)), _asyncGenerator3.default.await), 't0', 9);

                    case 9:
                        _iteratorNormalCompletion = true;
                        _context.next = 6;
                        break;

                    case 12:
                        _context.next = 18;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t1 = _context['catch'](4);
                        _didIteratorError = true;
                        _iteratorError = _context.t1;

                    case 18:
                        _context.prev = 18;
                        _context.prev = 19;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 21:
                        _context.prev = 21;

                        if (!_didIteratorError) {
                            _context.next = 24;
                            break;
                        }

                        throw _iteratorError;

                    case 24:
                        return _context.finish(21);

                    case 25:
                        return _context.finish(18);

                    case 26:
                        return _context.abrupt('return');

                    case 27:
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 30;
                        _context.t2 = _getIterator3.default;
                        _context.next = 34;
                        return _asyncGenerator3.default.await((0, _fsExtra.readdir)(path));

                    case 34:
                        _context.t3 = _context.sent;
                        _iterator2 = (0, _context.t2)(_context.t3);

                    case 36:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context.next = 58;
                            break;
                        }

                        name = _step2.value;


                        name = (0, _path2.join)(path, name);

                        _context.next = 41;
                        return name;

                    case 41:
                        _context.prev = 41;
                        _context.next = 44;
                        return _asyncGenerator3.default.await((0, _fsExtra.stat)(name));

                    case 44:
                        if (!_context.sent.isDirectory()) {
                            _context.next = 46;
                            break;
                        }

                        return _context.delegateYield((0, _asyncGeneratorDelegate3.default)((0, _asyncIterator3.default)(traverse(name)), _asyncGenerator3.default.await), 't4', 46);

                    case 46:
                        _context.next = 55;
                        break;

                    case 48:
                        _context.prev = 48;
                        _context.t5 = _context['catch'](41);
                        _context.t6 = _context.t5.code;
                        _context.next = _context.t6 === 'EPERM' ? 53 : _context.t6 === 'EBUSY' ? 53 : _context.t6 === 'ELOOP' ? 53 : _context.t6 === 'UNKNOWN' ? 53 : 54;
                        break;

                    case 53:
                        return _context.abrupt('continue', 55);

                    case 54:
                        throw _context.t5;

                    case 55:
                        _iteratorNormalCompletion2 = true;
                        _context.next = 36;
                        break;

                    case 58:
                        _context.next = 64;
                        break;

                    case 60:
                        _context.prev = 60;
                        _context.t7 = _context['catch'](30);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t7;

                    case 64:
                        _context.prev = 64;
                        _context.prev = 65;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 67:
                        _context.prev = 67;

                        if (!_didIteratorError2) {
                            _context.next = 70;
                            break;
                        }

                        throw _iteratorError2;

                    case 70:
                        return _context.finish(67);

                    case 71:
                        return _context.finish(64);

                    case 72:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[4, 14, 18, 26], [19,, 21, 25], [30, 60, 64, 72], [41, 48], [65,, 67, 71]]);
    }));

    return function traverse(_x) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * Iterator filter
 *
 * @param {Iterable}         iterator
 * @param {?(RegExp|string)} pattern          String pattern to match
 * @param {number}           [count=Infinity] Result count
 */


var filter = exports.filter = function () {
    var _ref2 = _asyncGenerator3.default.wrap( /*#__PURE__*/_regenerator2.default.mark(function _callee2(iterator, pattern, count) {
        var index, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _value, item;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        index = 0;
                        count = ~~count || Infinity;

                        if (pattern && !(pattern instanceof RegExp)) pattern = RegExp(pattern + '', 'i');

                        _iteratorNormalCompletion3 = true;
                        _didIteratorError3 = false;
                        _iteratorError3 = undefined;
                        _context2.prev = 6;
                        _iterator3 = (0, _asyncIterator3.default)(iterator);

                    case 8:
                        _context2.next = 10;
                        return _asyncGenerator3.default.await(_iterator3.next());

                    case 10:
                        _step3 = _context2.sent;
                        _iteratorNormalCompletion3 = _step3.done;
                        _context2.next = 14;
                        return _asyncGenerator3.default.await(_step3.value);

                    case 14:
                        _value = _context2.sent;

                        if (_iteratorNormalCompletion3) {
                            _context2.next = 27;
                            break;
                        }

                        item = _value;

                        if (!(!pattern || pattern.test(item))) {
                            _context2.next = 24;
                            break;
                        }

                        if (!(index++ < count)) {
                            _context2.next = 23;
                            break;
                        }

                        _context2.next = 21;
                        return item;

                    case 21:
                        _context2.next = 24;
                        break;

                    case 23:
                        return _context2.abrupt('break', 27);

                    case 24:
                        _iteratorNormalCompletion3 = true;
                        _context2.next = 8;
                        break;

                    case 27:
                        _context2.next = 33;
                        break;

                    case 29:
                        _context2.prev = 29;
                        _context2.t0 = _context2['catch'](6);
                        _didIteratorError3 = true;
                        _iteratorError3 = _context2.t0;

                    case 33:
                        _context2.prev = 33;
                        _context2.prev = 34;

                        if (!(!_iteratorNormalCompletion3 && _iterator3.return)) {
                            _context2.next = 38;
                            break;
                        }

                        _context2.next = 38;
                        return _asyncGenerator3.default.await(_iterator3.return());

                    case 38:
                        _context2.prev = 38;

                        if (!_didIteratorError3) {
                            _context2.next = 41;
                            break;
                        }

                        throw _iteratorError3;

                    case 41:
                        return _context2.finish(38);

                    case 42:
                        return _context2.finish(33);

                    case 43:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[6, 29, 33, 43], [34,, 38, 42]]);
    }));

    return function filter(_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

/**
 * @param {string} name - Name (without extension name) of a executable file
 *
 * @return {string} First matched path of a command
 */
var which = exports.which = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(name) {
        var _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, root, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _value2, file, path, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, _root, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _value3, _file, _path, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _value4, _file2;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.t0 = process.platform;
                        _context3.next = _context3.t0 === 'win32' ? 3 : _context3.t0 === 'darwin' ? 62 : 124;
                        break;

                    case 3:
                        _iteratorNormalCompletion7 = true;
                        _didIteratorError7 = false;
                        _iteratorError7 = undefined;
                        _context3.prev = 6;
                        _iterator7 = (0, _getIterator3.default)((0, _windows.getAppFolder)());

                    case 8:
                        if (_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done) {
                            _context3.next = 47;
                            break;
                        }

                        root = _step7.value;
                        _iteratorNormalCompletion4 = true;
                        _didIteratorError4 = false;
                        _iteratorError4 = undefined;
                        _context3.prev = 13;
                        _iterator4 = (0, _asyncIterator3.default)(filter(traverse(root), '\\\\' + name + '\\.exe$', 1));

                    case 15:
                        _context3.next = 17;
                        return _iterator4.next();

                    case 17:
                        _step4 = _context3.sent;
                        _iteratorNormalCompletion4 = _step4.done;
                        _context3.next = 21;
                        return _step4.value;

                    case 21:
                        _value2 = _context3.sent;

                        if (_iteratorNormalCompletion4) {
                            _context3.next = 28;
                            break;
                        }

                        file = _value2;
                        return _context3.abrupt('return', file);

                    case 25:
                        _iteratorNormalCompletion4 = true;
                        _context3.next = 15;
                        break;

                    case 28:
                        _context3.next = 34;
                        break;

                    case 30:
                        _context3.prev = 30;
                        _context3.t1 = _context3['catch'](13);
                        _didIteratorError4 = true;
                        _iteratorError4 = _context3.t1;

                    case 34:
                        _context3.prev = 34;
                        _context3.prev = 35;

                        if (!(!_iteratorNormalCompletion4 && _iterator4.return)) {
                            _context3.next = 39;
                            break;
                        }

                        _context3.next = 39;
                        return _iterator4.return();

                    case 39:
                        _context3.prev = 39;

                        if (!_didIteratorError4) {
                            _context3.next = 42;
                            break;
                        }

                        throw _iteratorError4;

                    case 42:
                        return _context3.finish(39);

                    case 43:
                        return _context3.finish(34);

                    case 44:
                        _iteratorNormalCompletion7 = true;
                        _context3.next = 8;
                        break;

                    case 47:
                        _context3.next = 53;
                        break;

                    case 49:
                        _context3.prev = 49;
                        _context3.t2 = _context3['catch'](6);
                        _didIteratorError7 = true;
                        _iteratorError7 = _context3.t2;

                    case 53:
                        _context3.prev = 53;
                        _context3.prev = 54;

                        if (!_iteratorNormalCompletion7 && _iterator7.return) {
                            _iterator7.return();
                        }

                    case 56:
                        _context3.prev = 56;

                        if (!_didIteratorError7) {
                            _context3.next = 59;
                            break;
                        }

                        throw _iteratorError7;

                    case 59:
                        return _context3.finish(56);

                    case 60:
                        return _context3.finish(53);

                    case 61:
                        return _context3.abrupt('break', 161);

                    case 62:
                        path = Shell_which(name);

                        if (!path) {
                            _context3.next = 65;
                            break;
                        }

                        return _context3.abrupt('return', path);

                    case 65:
                        _iteratorNormalCompletion8 = true;
                        _didIteratorError8 = false;
                        _iteratorError8 = undefined;
                        _context3.prev = 68;
                        _iterator8 = (0, _getIterator3.default)(MacAppPath);

                    case 70:
                        if (_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done) {
                            _context3.next = 109;
                            break;
                        }

                        _root = _step8.value;
                        _iteratorNormalCompletion5 = true;
                        _didIteratorError5 = false;
                        _iteratorError5 = undefined;
                        _context3.prev = 75;
                        _iterator5 = (0, _asyncIterator3.default)(filter(traverse(_root), name + '\\.app$', 1));

                    case 77:
                        _context3.next = 79;
                        return _iterator5.next();

                    case 79:
                        _step5 = _context3.sent;
                        _iteratorNormalCompletion5 = _step5.done;
                        _context3.next = 83;
                        return _step5.value;

                    case 83:
                        _value3 = _context3.sent;

                        if (_iteratorNormalCompletion5) {
                            _context3.next = 90;
                            break;
                        }

                        _file = _value3;
                        return _context3.abrupt('return', _file);

                    case 87:
                        _iteratorNormalCompletion5 = true;
                        _context3.next = 77;
                        break;

                    case 90:
                        _context3.next = 96;
                        break;

                    case 92:
                        _context3.prev = 92;
                        _context3.t3 = _context3['catch'](75);
                        _didIteratorError5 = true;
                        _iteratorError5 = _context3.t3;

                    case 96:
                        _context3.prev = 96;
                        _context3.prev = 97;

                        if (!(!_iteratorNormalCompletion5 && _iterator5.return)) {
                            _context3.next = 101;
                            break;
                        }

                        _context3.next = 101;
                        return _iterator5.return();

                    case 101:
                        _context3.prev = 101;

                        if (!_didIteratorError5) {
                            _context3.next = 104;
                            break;
                        }

                        throw _iteratorError5;

                    case 104:
                        return _context3.finish(101);

                    case 105:
                        return _context3.finish(96);

                    case 106:
                        _iteratorNormalCompletion8 = true;
                        _context3.next = 70;
                        break;

                    case 109:
                        _context3.next = 115;
                        break;

                    case 111:
                        _context3.prev = 111;
                        _context3.t4 = _context3['catch'](68);
                        _didIteratorError8 = true;
                        _iteratorError8 = _context3.t4;

                    case 115:
                        _context3.prev = 115;
                        _context3.prev = 116;

                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }

                    case 118:
                        _context3.prev = 118;

                        if (!_didIteratorError8) {
                            _context3.next = 121;
                            break;
                        }

                        throw _iteratorError8;

                    case 121:
                        return _context3.finish(118);

                    case 122:
                        return _context3.finish(115);

                    case 123:
                        return _context3.abrupt('break', 161);

                    case 124:
                        _path = Shell_which(name);

                        if (!_path) {
                            _context3.next = 127;
                            break;
                        }

                        return _context3.abrupt('return', _path);

                    case 127:
                        _iteratorNormalCompletion6 = true;
                        _didIteratorError6 = false;
                        _iteratorError6 = undefined;
                        _context3.prev = 130;
                        _iterator6 = (0, _asyncIterator3.default)(filter(traverse('/opt'), name + '$', 1));

                    case 132:
                        _context3.next = 134;
                        return _iterator6.next();

                    case 134:
                        _step6 = _context3.sent;
                        _iteratorNormalCompletion6 = _step6.done;
                        _context3.next = 138;
                        return _step6.value;

                    case 138:
                        _value4 = _context3.sent;

                        if (_iteratorNormalCompletion6) {
                            _context3.next = 145;
                            break;
                        }

                        _file2 = _value4;
                        return _context3.abrupt('return', _file2);

                    case 142:
                        _iteratorNormalCompletion6 = true;
                        _context3.next = 132;
                        break;

                    case 145:
                        _context3.next = 151;
                        break;

                    case 147:
                        _context3.prev = 147;
                        _context3.t5 = _context3['catch'](130);
                        _didIteratorError6 = true;
                        _iteratorError6 = _context3.t5;

                    case 151:
                        _context3.prev = 151;
                        _context3.prev = 152;

                        if (!(!_iteratorNormalCompletion6 && _iterator6.return)) {
                            _context3.next = 156;
                            break;
                        }

                        _context3.next = 156;
                        return _iterator6.return();

                    case 156:
                        _context3.prev = 156;

                        if (!_didIteratorError6) {
                            _context3.next = 159;
                            break;
                        }

                        throw _iteratorError6;

                    case 159:
                        return _context3.finish(156);

                    case 160:
                        return _context3.finish(151);

                    case 161:
                        return _context3.abrupt('return', '');

                    case 162:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[6, 49, 53, 61], [13, 30, 34, 44], [35,, 39, 43], [54,, 56, 60], [68, 111, 115, 123], [75, 92, 96, 106], [97,, 101, 105], [116,, 118, 122], [130, 147, 151, 161], [152,, 156, 160]]);
    }));

    return function which(_x5) {
        return _ref3.apply(this, arguments);
    };
}();

require('babel-polyfill');

var _fsExtra = require('fs-extra');

var _path2 = require('path');

var _child_process = require('child_process');

var _windows = require('./windows');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Shell_which(name) {
    try {
        return ((0, _child_process.execSync)('which ' + name) + '').trim();
    } catch (error) {

        if (!('' + error.stdout + error.stderr).trim()) return '';
    }
}

var MacAppPath = ['/Applications', process.env.HOME + '/Applications', '/opt'].filter(_fsExtra.existsSync);