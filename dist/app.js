"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _authRoutes = _interopRequireDefault(require("./routers/authRoutes"));

var _petRoutes = _interopRequireDefault(require("./routers/petRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const path = require("path");

const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)({
  methods: ["GET", "PUT", "POST", "DELETE"]
}));
app.use((0, _helmet.default)());
app.use([_authRoutes.default, _petRoutes.default]); // Set static folder

app.use(_express.default.static("client/dist"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "client", "dist", "index.html"));
});
var _default = app;
exports.default = _default;