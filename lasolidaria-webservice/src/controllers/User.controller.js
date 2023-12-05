const httpError = require("http-errors");
const User = require('../models/User.model')

const makeDonation = async (req, res, next) => {
    try {
        const { body } = req;
        const newUser = new User(body);
        const savedUser = await newUser.save();
        if (!savedUser) throw httpError(500, "No se realizó la donación");
        res.status(201).json({ message: "Donación realizada exitosamente", data: savedUser });
    } catch (error) {
        next(error);
    }
};

const viewDonations = async (req, res, next) => {
    try {
        const donations = await User.find();
        if (!donations) throw httpError(404, "No se encontraron donaciones realizadas");
        res.status(200).json({ data: donations });
    } catch (error) {
        next(error);
    }
};

/*async function makeDonation(req, res) {
    try {
        const { userId, amount } = req.body;
        const donation = new Donation({ userId, amount });
        await donation.save();

        res.status(201).json({ message: 'Donación hecha exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}*/

/*async function viewDonations(req, res) {
    try {
        const { userId } = req.params;
        const donations = await Donation.find();
        if (!donations) throw httpError(404, "No se han encontrado donaciones");
        res.status(200).json({ data: donations });
    } catch (error) {
        next(error);
    }
};*/

module.exports = { makeDonation, viewDonations };