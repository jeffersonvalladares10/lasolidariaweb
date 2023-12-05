const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    user_avatar: {
        type: String,
        required: false
    },
    user_name: {
        type: String,
        trim: true,
        required: true
    },
    user_email: {
        type: String,
        trim: true,
        required: true
    }
}, {timestamps: true});


module.exports = Mongoose.model("User", UserSchema);