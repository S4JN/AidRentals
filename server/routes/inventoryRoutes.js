const express = require("express");
const { inventoryController, getAllInventory,getInventory } = require("../controllers/inventorController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


// ADD||POST || PROTECTED 
router.post("/add", authMiddleware, inventoryController);
// RETRIVE || GET || PROTECTED
router.get("/get", authMiddleware, getAllInventory);

router.get("/get-inventory", authMiddleware, getInventory);


module.exports = router;