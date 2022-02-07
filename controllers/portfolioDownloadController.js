exports.getDownload = async (req, res) => {
  try {
    const file = "assets/" + req.query.filename;
    console.log(file);
    if (!file) {
      res.status(404).json({ error: "The file does not exit" });
    }
    res.download(file);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};
