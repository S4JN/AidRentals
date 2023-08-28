const express = require("express");
const { inventoryController,getInventory } = require("../controllers/inventorController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


// ADD||POST || PROTECTED 
router.post("/add",authMiddleware,inventoryController);
// RETRIVE || GET || PROTECTED
router.get("/get",authMiddleware,getInventory);

module.exports = router;