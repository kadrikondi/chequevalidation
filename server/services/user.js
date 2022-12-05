import Model from "../models/user";

class UserService {
    static async getAllUsers() {
        try {
            return await Model.find().sort({ "_id": -1 })
        } catch (e) {
            throw e
        }
    }
       static async getAllNgUsers() {
           try {
               return await Model.find( {
                   country: 'nigeria'
               }).sort({
                   "_id": -1
               })
           } catch (e) {
               throw e
           }
       }

       static async getAllMale() {
           try {
               return await Model.find({
                   gender: 'Male'
               }).sort({
                   "_id": -1
               })
           } catch (e) {
               throw e
           }
       }

       static async getAllFemale() {
           try {
               return await Model.find({
                   gender: 'Female'
               }).sort({
                   "_id": -1
               })
           } catch (e) {
               throw e
           }
       }

    static async getSingleUser(id) {
        try {
            return await Model.findOne({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async getUserEmail(email) {
        try {
            return await Model.findOne({ email: email })
        } catch (e) {
            throw e
        }
    }

    static async createNewUser(data) {
        try {
            return await Model.create(data)
        } catch (e) {
            throw e
        }
    }

    static async deleteAUser(id) {
        try {
            return await Model.findByIdAndRemove(id)
        } catch (e) {
            throw e
        }
    }

};

export default UserService;
