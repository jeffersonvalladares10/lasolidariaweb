const httpError = require("http-errors");
const Donation = require('../models/Donation.model')

const getDonations = async (req, res, next) => {
    try {
        const getDonations = await Donation.find();
        if (!getDonations) throw httpError(404, "No se han encontrado donaciones");
        res.status(200).json({ data: getDonations });
    } catch (error) {
        next(error);
    }
}

module.exports = { getDonations };