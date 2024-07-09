const locationModel = require("../model/locationModel");

const locationController = async (req, res) => {
  try {
    console.log("hi");
    const data = locationModel.find();
    res.send(data);
  } catch (err){
    console.log(err);
    res.status(500).send({ msg: "Internal Server Error"});
  }
};

module.exports = locationController;
