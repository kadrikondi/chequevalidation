import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const Contactus = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    subject: {
        type: String,
        trim: true,
        lowercase: true
    },
    message: {
        type: String,
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        trim: true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})
Contactus.plugin(mongodbErrorHandler)
export default mongoose.model('contactus', Contactus)
