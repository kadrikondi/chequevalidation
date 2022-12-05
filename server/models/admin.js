import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String }
});

export default mongoose.model("admins", adminSchema)
