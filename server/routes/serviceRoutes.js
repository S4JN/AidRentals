const express = require("express")
const { addService, getAllService,getService } = require("../controllers/serviceController")
const authMiddleware = require("../middlewares/authMiddleware");


const router = express.Router()

router.post("/",authMiddleware, addService);
router.get("/get-services",authMiddleware, getAllService)
//s
router.get("/get-service",authMiddleware, getService)


module.exports = router;