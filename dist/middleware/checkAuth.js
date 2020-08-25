"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (token !== undefined) {
    if (token) {
      _jsonwebtoken.default.verify(token, process.env.TOKEN_SECRET, {
        algorithms: "HS256"
      }, (err, decoded) => {
        if (err) {
          return res.status(403).json({
            error: "You are not authorized."
          });
        }

        req.data = decoded;
        return next();
      });
    } else {
      return res.status(403).json({
        error: "You are not authorized."
      });
    }
  } else {
    return res.status(400).json({
      error: "Invalid token."
    });
  }
};

var _default = checkAuth;
exports.default = _default;