const express = require("express");
const router = express.Router();

const {
    createCampaign,
    updateCampaign,
    deleteCampaign,
    getAllCampaigns,
    getOrgCampaigns,
    getCampaignsByCategory,
} = require("../controllers/Camp.controller");

router.post("/", createCampaign);
router.put("/:id", updateCampaign);
router.delete("/:id", deleteCampaign);
router.get("/", getAllCampaigns);
router.get("/:id", getOrgCampaigns);
router.get("/:id", getCampaignsByCategory);

module.exports = router;