const httpError = require("http-errors");
const Org = require('../models/Org.model');

const createOrganization = async () => {
    
}

const getOneOrganization = async (req, res, next) => {
    try {
        const { id } = req.params;
        const organization = await Org.findById(lead_id);
        if (!organization) throw httpError(404, "No se ha encontrado esa organización");
        res.status(200).json({ data: organization });
    } catch (error) {
        next(error);
    }
};

const getAllOrganizations = async (req, res, next) => {
    try {
        const organizations = await Org.find();
        if (!organizations) throw httpError(404, "No se han encontrado organizaciones");
        res.status(200).json({ data: organizations });
    } catch (error) {
        next(error);
    }
}

const getOrganizationsByCategory = async (req, res, next) => {
    try {
        const getOrganizationsByCat = await Org.find(category);
        if (!getOrganizationsByCat) throw httpError(404, "No se han encontrado organizaciones de esa categoría");
        res.status(200).json({ data: getOrganizationsByCat });
    } catch (error) {
        next(error);
    }
}

module.exports = { getOneOrganization, getAllOrganizations, getOrganizationsByCategory };