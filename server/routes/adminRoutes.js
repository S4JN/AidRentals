const express = require("express")
// const { testController } = require("../controllers/testController")
const { adminTest, register, login, getInventoryCount, getServiceCount, getUsersCount, deleteInventory, deleteService, getAllInventory } = require("../controllers/adminController")
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router()

router.get("/", adminTest);
router.post("/register", register);
router.post("/login", login);
router.get('/inventory/count', getInventoryCount);
router.get('/service/count', getServiceCount);
router.get('/users/count', getUsersCount);
router.get("/inventory/all",getAllInventory)

router.post("/inventory/delete", deleteInventory);
//deleteService
router.post("/service/delete", deleteService);



module.exports = router;