const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const OrgSchema = new Schema({
    org_logo: {
        type: String,
        required: false
    },
    org_name: {
        type: String,
        trim: true,
        required: true
    },
    org_birthdate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    org_address: {
        type: String,
        trim: true,
        required: true
    },  
    department: {
        type: String,
        required: true
    },
    org_email: {
        type: String,
        trim: true,
        required: true
    },
    org_phone: {
        type: String,
        trim: true,
        required: true
    },
    org_leadname: {
        type: String,
        trim: true,
        required: true
    } ,
    org_leadid: {
        type: String,
        trim: true,
        required: true
    }, 
    org_resume: {
        type: String,
        trim: true,
        required: false
    }
},{timestamps: true});

module.exports = Mongoose.model("Org", OrgSchema);