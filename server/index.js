import app from "./app";
import mongoose from "mongoose";

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/findmypetdb", {
    dbName: "findmypetdb",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server running on port: ${port}`));
  })
  .catch((e) => console.log("Something went wrong connecting to the db."));
