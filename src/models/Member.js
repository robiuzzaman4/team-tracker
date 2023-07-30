import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        unique: true,
        required: true
    },
}, { timestamps: true });

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export default Member;