console.log("GoGame Backend is running");

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

// 1) ---------------------- Project CRUD Socialboil
app.use("/maintenance", require("./routes/CRUDMaintenance"));
app.use("/message", require("./routes/CRUDMessage"));

// 2) ---------------------- Project CS50
app.use("/cs50", require("./routes/CS50Message"));
app.use("/cs50/rating", require("./routes/CS50Rating"));
app.use("/cs50/download/", require("./routes/CS50Download"));

// 3) ---------------------- Personal Portfolio
app.use("/portfolio/download", require("./routes/portfolioDownload"));
app.use("/portfolio/rating", require("./routes/portfolioRating"));
app.use("/portfolio/testimonials", require("./routes/portfolioMessage"));
app.use("/portfolio/email", require("./routes/portfolioEmail"));

const host = "0.0.0.0";
app.listen(process.env.PORT || 5555, () => {
  console.log("App listening on port 5555!");
});

// app.listen(3555, () => {
//   console.log("App listening on port 3555!");
// });
// app.listen(process.env.PORT || 5000);
