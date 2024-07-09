const restaurentModel =require('../model/restaurentModel.js')
const restaurentController = async (req, res) => {
  try {
    const data = await restaurentModel.find();
    console.log(data);
    res.send(data);
  } catch {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

module.exports = restaurentController;
