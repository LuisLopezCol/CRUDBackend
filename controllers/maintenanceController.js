const Maintenance = require("../models/Maintenance");

exports.createMaintenance = async (req, res) => {
  try {
    let maintenance = new Maintenance(req.body);
    await maintenance.save();
    res.send(maintenance);
  } catch (error) {
    console.log("error");
    res
      .status(500)
      .send("There was a mistake, please comunicate with IT Team - POST");
  }
};

exports.getMaintenances = async (req, res) => {
  try {
    let Maintenances = await Maintenance.find();
    res.json(Maintenances);
  } catch (error) {
    console.log("error");
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.getMaintenance = async (req, res) => {
  try {
    let maintenance = await Maintenance.findById(req.params.id);
    if (!maintenance) {
      res.status(404).json({ error: "The worker does not exit" });
    }
    res.json(maintenance);
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};

exports.updateMaintenance = async (req, res) => {
  try {
    console.log(req.body);
    const { name, lastname, idnumber, address, email } = req.body;
    let data_workers = await Maintenance.findById(req.params.id);

    console.log(data_workers);

    if (!data_workers) {
      res.status(404).json({ error: "The worker does not exit" });
    }

    data_workers.name = name;
    data_workers.lastname = lastname;
    data_workers.idnumber = idnumber;
    data_workers.address = address;
    data_workers.email = email;

    data_workers = await Maintenance.findOneAndUpdate(
      { _id: req.params.id },
      data_workers,
      { new: true }
    );
    res.json(data_workers);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send("There was a mistake, please comunicate with IT TeamPUT");
  }
};

exports.deleteMaintenance = async (req, res) => {
  try {
    let data_maintenance = await Maintenance.findById(req.params.id);
    if (!data_maintenance) {
      res.status(404).json({ msg: "The worker does not exist" });
    }

    await Maintenance.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "The worker has been deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send("There was a mistake, please comunicate with IT Team");
  }
};
