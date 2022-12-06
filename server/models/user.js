import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    surname: { type: String, lowercase: true },
    firstname: { type: String, lowercase: true },
    lastname: { type: String, lowercase: true },
    phone: { type: String },
    email: { type: String, trim: true, lowercase: true },
    agegroup: { type: String, trim: true, lowercase: true},
    country: { type: String, lowercase: true },
    state : { type: String, lowercase: true },
    gender: { type: String },
    education: { type: String },
    worktype: { type: String, lowercase: true },
    photo: { type: String },
    userId: { type: String },
 

});

export default mongoose.model('users', userSchema);
