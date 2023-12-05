const httpError = require("http-errors");
const Camp = require('../models/Camp.model')

const createCampaign = async (req, res, next) => {
    try {
        const { body } = req;
        const newCamp = new Camp(body);
        const savedCamp = await newCamp.save();
        if (!savedCamp) throw httpError(500, "No se ha podido crear la campaña");
        res.status(201).json({ message: "La campaña se ha creado exitosamente", data: savedCamp });
    } catch (error) {
        next(error);
    }
};

const updateCampaign = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const toUpdateCamp = await Camp.findById(id);
        if (!toUpdateCamp) throw httpError(404, "No se ha encontrado la campaña");
        const updatedCamp = await Camp.findByIdAndUpdate(id, body, {
            new: true,
        });
        if (!updatedCamp) throw httpError(500, "No se ha podido actualizar la campaña");
        res.status(200).json({ message: "Campaña actualizada exitosamente", data: updatedCamp });
    } catch (error) {
        next(error);
    }
};

const deleteCampaign = async (req, res, next) => {
    try {
        const { id } = req.params;
        const toDeleteCamp = await Camp.findByIdAndDelete(id);
        if (!toDeleteCamp) throw httpError(404, "No se ha encontrado la campaña");
        res.status(200).json({ message: "Campaña eliminada exitosamente", data: toDeleteCamp });
        
    } catch (error) {
        next(error);
    }
}

const getAllCampaigns = async (req, res, next) => {
    try {
        const campaigns = await Camp.find();
        if (!campaigns) throw httpError(404, "No se han encontrado campañas");
        res.status(200).json({ data: campaigns });
    } catch (error) {
        next(error);
    }
}

const getOrgCampaigns = async (req, res, next) => {
    try {
        const getOrganizationsCamp = await Camp.find(org_id);
        if (!getOrganizationsCamp) throw httpError(404, "No se han encontrado campañas de dicha organización");
        res.status(200).json({ data: getOrganizationsCamp });
    } catch (error) {
        next(error);
    }
}

const getCampaignsByCategory = async (req, res, next) => {
    try {
        const getCampByCategory = await Org.find(category);
        if (!getCampByCategory) throw httpError(404, "No se han encontrado campañas de dicha categoría");
        res.status(200).json({ data: getCampByCategory });
    } catch (error) {
        next(error);
    }
}


module.exports = { 
    createCampaign, 
    updateCampaign, 
    deleteCampaign, 
    getAllCampaigns, 
    getOrgCampaigns,
    getCampaignsByCategory,
};