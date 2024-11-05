const vendorcontroller = require("../controllers/vandorController");
const express = require('express');


const router = express.Router()

router.post("/register",vendorcontroller.vendorRegister)


module.exports = router;