const express = require("express")
const { addService, getAllService } = require("../controllers/serviceController")
const authMiddleware = require("../middlewares/authMiddleware");


const router = express.Router()

router.post("/",authMiddleware, addService);
router.get("/get-services",authMiddleware, getAllService)

module.exports = router;