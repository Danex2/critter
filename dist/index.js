"use strict";

var _app = _interopRequireDefault(require("./app"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT;

_mongoose.default.connect(process.env.MONGO_URI || "mongodb://localhost:27017/findmypetdb", {
  dbName: "findmypetdb",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  _app.default.listen(port, () => console.log(`Server running on port: ${port}`));
}).catch(e => console.log("Something went wrong connecting to the db."));