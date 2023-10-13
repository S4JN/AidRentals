const express = require("express");
const { inventoryController, getAllInventory,getInventory, getRandom } = require("../controllers/inventorController");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();


// ADD||POST || PROTECTED 
router.post("/add", authMiddleware, inventoryController);
// RETRIVE || GET || PROTECTED
router.get("/get", authMiddleware, getAllInventory);

router.get("/get-inventory", authMiddleware, getInventory);
router.get("/get-random", authMiddleware,getRandom)


module.exports = router;