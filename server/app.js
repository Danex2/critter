import express from "express";
import cors from "cors";
import helmet from "helmet";
import auth from "./routers/authRoutes";
import pet from "./routers/petRoutes";
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    methods: ["GET", "PUT", "POST", "DELETE"],
    origin: "http://localhost:8080",
  })
);
app.use(helmet());

app.use([auth, pet]);

// Set static folder
app.use(express.static("client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "client", "dist", "index.html"));
});

export default app;
