const firmController = require("../controllers/firmController");
const express = require("express");
const verifyToken = require("../middlewares/verifytoken");

const router = express.Router();

router.post("/add-firm", verifyToken, firmController.addFirm);

module.exports = router;
