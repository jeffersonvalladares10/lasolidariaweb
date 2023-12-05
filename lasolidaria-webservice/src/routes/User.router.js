const express = require("express");
const router = express.Router();

const {
  makeDonation,
  viewDonations,
} = require("../controllers/User.controller");

router.post("/", makeDonation);
router.get("/", viewDonations);

module.exports = router;