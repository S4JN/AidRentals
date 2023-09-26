const express = require("express");
const countController = require("../controllers/countController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/",countController);


module.exports = router;