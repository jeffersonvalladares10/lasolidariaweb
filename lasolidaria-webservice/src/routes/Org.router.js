const express = require("express");
const router = express.Router();

const {
    getOneOrganization,
    getAllOrganizations,
    getOrganizationsByCategory,
} = require("../controllers/Org.controller");

router.get("/:id", getOneOrganization);
router.get("/", getAllOrganizations);
router.get("/:id", getOrganizationsByCategory);

module.exports = router;