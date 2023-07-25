const express = require("express");
const { inventoryController } = require("../controllers/inventorController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


// ADD||POST || PROTECTED 
router.post("/add",authMiddleware,inventoryController);

module.exports = router;