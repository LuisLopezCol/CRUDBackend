console.log("GoGame Backend is running");

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());
app.use("/maintenance", require("./routes/maintenance"));
app.use("/message", require("./routes/message"));

// app.listen(3555, () => {
//   console.log("App listening on port 3555!");
// });

const host = "0.0.0.0";
app.listen(process.env.PORT || 5000);
