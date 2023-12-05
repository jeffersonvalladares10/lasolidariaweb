const { Int32 } = require("bson");
const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const DonationSchema = new Schema({
    donation_datetime: {
        type: Date,
        required: true
    },
    camp_title: {
        type: String,
        required: true
    },
    org_name: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    donation_amount: {
        type: Number,
        required: true
    }
}, {timestamps: true});


module.exports = Mongoose.model("Donation", DonationSchema);