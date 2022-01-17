console.log("GoGame Backend is running");

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());
//Project CRUD Socialboil
app.use("/maintenance", require("./routes/maintenance"));
app.use("/message", require("./routes/message"));
//Project CS50
app.use("/cs50", require("./routes/messageCS50"));
app.use("/cs50/rating", require("./routes/ratingCS50"));

const host = "0.0.0.0";
app.listen(process.env.PORT || 5555, () => {
  console.log("App listening on port 5555!");
});

// app.listen(3555, () => {
//   console.log("App listening on port 3555!");
// });

// app.listen(process.env.PORT || 5000);
