const express = require("express");
const restaurentController = require("../controller/restaurentController");
const locationController = require("../controller/locationController");
const router = express.Router();

router.get("/restaurent", restaurentController);
router.get("/location", locationController);


module.exports = router;
