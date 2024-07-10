const location = require("../model/locationModel");

const locationController = async (req, res) => {
  try {
    const data =await location.find();
    res.send(data);
  } catch (err){
    console.log(err);
    res.status(500).send({ msg: "Internal Server Error"});
  }
};

module.exports = locationController;
