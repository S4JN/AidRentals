const express = require("express")
const { addService } = require("../controllers/serviceController")
const authMiddleware = require("../middlewares/authMiddleware");


const router = express.Router()

router.post("/",authMiddleware, addService);

module.exports = router;