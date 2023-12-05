const { Int32, ObjectId } = require("bson");
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const CampSchema = new Schema({
    campaign_date: {
        type: Date,
        required: true
    },
    campaign_title: {
        type: String,
        trim: true,
        required: true
    },
    campaign_details: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    campaign_goal: {
        type: Number,
        required: true
    },
    org_id: {
        type: ObjectId,
        required: true
    },
    campaign_docs: {
        type: String,
        required: true
    }
},{timestamps: true});

module.exports = Mongoose.model("Camp", CampSchema);