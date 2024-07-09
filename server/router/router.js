const express = require("express");
const restaurentController = require("../controller/restaurentController");
const router = express.Router();
router.get('/',(req,res)=>{res.send("Hello")
})
router.get("/restaurent", restaurentController);


module.exports = router;
