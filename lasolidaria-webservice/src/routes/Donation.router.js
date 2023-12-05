const express = require("express");
const router = express.Router();

const {
    getDonations,
} = require("../controllers/Donation.controller");

router.get("/", getDonations);

module.exports = router;