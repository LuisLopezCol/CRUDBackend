console.log("GoGame Backend is running");

const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
const app = express();

conectarDB();

app.use(express.json());
app.use(cors());
app.use("/maintenance", require("./routes/maintenance"));
app.use("/message", require("./routes/message"));

app.listen(3055, () => {
  console.log("App listening on port 3055!");
});
