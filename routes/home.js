const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

//Main Routes 
router.get("/", homeController.getIndex);

module.exports = router;
