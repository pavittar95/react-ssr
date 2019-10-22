import express from "express";
// we'll talk about this in a minute:
import serverRenderer from "./middleware/renderer";

const PORT = 3001;
const path = require("path");

const app = express();

// other static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

// root (/) should always serve our server rendered page
app.use("*", serverRenderer);

// start the app
app.listen(PORT, error => {
  console.log(`Server started listening on ${PORT}`);
});
