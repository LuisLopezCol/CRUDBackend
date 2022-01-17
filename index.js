console.log("GoGame Backend is running");

const express = require("express");
const cors = require("cors");
const conectarDB = require("./config/db");
const app = express();

conectarDB();

app.use(cors());
app.use(express.json());

// 1) ------ Project CRUD Socialboil
app.use("/maintenance", require("./routes/maintenance"));
app.use("/message", require("./routes/message"));

// 2) ------ Project CS50
app.use("/cs50", require("./routes/messageCS50"));
app.use("/cs50/rating", require("./routes/ratingCS50"));
//I did this here to avoid the creation of more files in the project
app.get("/cs50/download", async (req, res) => {
  try {
    const file = "assets/weeek1Cash.pdf";
    if (!file) {
      res.status(404).json({ error: "The file does not exit" });
    }
    res.download(file);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
});
/* //Another way to do the above
app.get("/cs50/download", function (req, res) {
  const file = "assets/weeek1Cash.pdf";
  // console.log(req.query.filename);
  res.download(file);
}); */

const host = "0.0.0.0";
app.listen(process.env.PORT || 5555, () => {
  console.log("App listening on port 5555!");
});

// app.listen(3555, () => {
//   console.log("App listening on port 3555!");
// });
// app.listen(process.env.PORT || 5000);
